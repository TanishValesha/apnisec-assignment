import { RateLimiter } from "../../rate-limit/RateLimiter";
import { RateLimitMiddleware } from "../../middlewares/RateLimitMiddleware";
import { rateLimitStore } from "../../rate-limit/rateLimitStoreSingleton";

const WINDOW_MS_15_MINUTES = 15 * 60 * 1000;

export class RateLimitFactory {
  static issueRead() {
    return new RateLimitMiddleware(
      new RateLimiter(
        rateLimitStore,
        100,                 // 100 requests
        WINDOW_MS_15_MINUTES      
      ),
      "issue:read"
    );
  }

  static issueWrite() {
    return new RateLimitMiddleware(
      new RateLimiter(
        rateLimitStore,
        50,                 // 50 requests
        WINDOW_MS_15_MINUTES       
      ),
      "issue:write"
    );
  }

  static authLimit() {
    return new RateLimitMiddleware(
      new RateLimiter(
        rateLimitStore,
        5,                 // 5 requests
        WINDOW_MS_15_MINUTES       
      ),
      "auth"
    );
  }

  static profileLimit() {
    return new RateLimitMiddleware(
      new RateLimiter(
        rateLimitStore,
        30,                 // 30 requests
        WINDOW_MS_15_MINUTES       
      ),
      "profile"
    );
  }

}
