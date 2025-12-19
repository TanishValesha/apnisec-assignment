import { AuthHandler } from "../handlers/AuthHandler";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";
import { JWTService } from "../utils/JWTService";
import { PasswordService } from "../utils/PasswordService";
import { LoginValidator } from "../validators/LoginValidator";
import { RegisterValidator } from "../validators/RegisterValidator";

export class AuthFactory {
  static createAuthHandler() {
    return new AuthHandler(
      new AuthService(
        new UserRepository(),
        new PasswordService(),
        new JWTService()
      ),
      new RegisterValidator(),
      new LoginValidator()
    );
  }
}
