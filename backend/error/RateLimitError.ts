import { AppError } from "./AppError";

export class RateLimitError extends AppError {
  constructor() {
    super("Too many requests", 429);
  }
}
