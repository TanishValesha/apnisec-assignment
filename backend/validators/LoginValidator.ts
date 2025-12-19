import { ValidationError } from "../error/ValidationError";

export class LoginValidator {
  validate(data: any) {
    if (!data.email || !data.password) {
      throw new ValidationError("Email and password required");
    }
  }
}
