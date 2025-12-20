import { RateLimiter } from "../rate-limit/RateLimiter";
import { RateLimitMiddleware } from "../middlewares/RateLimitMiddleware";
import { rateLimitStore } from "../rate-limit/rateLimitStoreSingleton";

export class RateLimitFactory {
  static createDefault() {
    return new RateLimitMiddleware(
      new RateLimiter(
        rateLimitStore,
        100,                 // 100 requests
        15 * 60 * 1000       // 15 minutes
      )
    );
  }
}
