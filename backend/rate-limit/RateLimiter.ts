import { RateLimitError } from "../error/RateLimitError";
import { InMemoryRateLimitStore } from "./RateLimitStore";

export class RateLimiter {
  constructor(
    private readonly store: InMemoryRateLimitStore,
    private readonly limit: number,
    private readonly windowMs: number
  ) {}

  check (key: string) {
    const now = Date.now();
    const record = this.store.get(key)

    if(!record || record.resetAt < now) {
        const resetAt = now + this.windowMs;
        this.store.set(key, { count: 1, resetAt });
        
        return {
            limit: this.limit,
            remaining: this.limit - 1,
            resetAt
        }
    }

    if (record.count >= this.limit) {
      throw new RateLimitError();
    }

    record.count += 1;
    this.store.set(key, record);

    return {
      limit: this.limit,
      remaining: this.limit - record.count,
      resetAt: record.resetAt,
    };
    
  }
}
