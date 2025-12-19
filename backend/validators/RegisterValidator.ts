import { ValidationError } from "../error/ValidationError";

export class RegisterValidator {
  validate(data: any) {
    if (!data.email || !data.password) {
      throw new ValidationError("Email and password required");
    }

    if (data.password.length < 8) {
      throw new ValidationError("Password must be at least 8 characters");
    }
  }
}
