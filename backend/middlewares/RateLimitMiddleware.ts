import { RateLimiter } from "../rate-limit/RateLimiter";

export class RateLimitMiddleware {
  constructor(private readonly limiter: RateLimiter) {}

  check(req: Request) {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const result = this.limiter.check(ip);

    return {
      "X-RateLimit-Limit": String(result.limit),
      "X-RateLimit-Remaining": String(result.remaining),
      "X-RateLimit-Reset": String(Math.floor(result.resetAt / 1000)),
    };
  }
}
