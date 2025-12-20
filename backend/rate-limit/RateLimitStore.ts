import { RateLimitRecord } from "../types/rate-limit.types";

export class InMemoryRateLimitStore {
  private store = new Map<string, RateLimitRecord>();

  get(key: string): RateLimitRecord | undefined {
    return this.store.get(key);
  }

  set(key: string, value: RateLimitRecord): void {
    this.store.set(key, value);
  }
}