import { AuthHandler } from "@/backend/handlers/auth/AuthHandler";
import { RateLimitMiddleware } from "@/backend/middlewares/RateLimitMiddleware";
import { UserRepository } from "@/backend/repositories/UserRepository";
import { AuthService } from "@/backend/services/auth/AuthService";
import { JWTService } from "@/backend/utils/JWTService";
import { PasswordService } from "@/backend/utils/PasswordService";
import { LoginValidator } from "@/backend/validators/auth/LoginValidator";
import { RegisterValidator } from "@/backend/validators/auth/RegisterValidator";
import { RateLimitFactory } from "../RateLimitFactory";

export class AuthFactory {
  static createAuthHandler() {
    return new AuthHandler(
      new AuthService(
        new UserRepository(),
        new PasswordService(),
        new JWTService()
      ),
      new RegisterValidator(),
      new LoginValidator(),
      RateLimitFactory.authLimit()
    );
  }
}
