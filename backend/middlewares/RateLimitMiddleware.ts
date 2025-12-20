import { RateLimiter } from "../rate-limit/RateLimiter";

export class RateLimitMiddleware {
  constructor(
    private readonly limiter: RateLimiter,
    private readonly reqScope: string
  ) {}

  check(identity: string) {
    const key =  `${identity}:${this.reqScope}`;
  
    const result = this.limiter.check(key);

    return {
      "X-RateLimit-Limit": String(result.limit),
      "X-RateLimit-Remaining": String(result.remaining),
      "X-RateLimit-Reset": String(Math.floor(result.resetAt / 1000)),
    };
  }
}
