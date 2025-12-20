import { ProfileHandler } from "@/backend/handlers/users/ProfileHandlers";
import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { UserRepository } from "@/backend/repositories/UserRepository";
import { ProfileService } from "@/backend/services/users/ProfileService";
import { JWTService } from "@/backend/utils/JWTService";
import { UpdateProfileValidator } from "@/backend/validators/users/UpdateProfileValidator";
import { EmailFactory } from "../email/EmailFactory";

export class UserFactory {
  static profileHandler() {
    return new ProfileHandler(
      new ProfileService(new UserRepository()),
      new UpdateProfileValidator(),
      new AuthMiddleware(new JWTService()),
      EmailFactory.create(),
      new UserRepository()
    );
  }
}
