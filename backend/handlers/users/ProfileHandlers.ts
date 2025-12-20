import { ProfileService } from "../../services/users/ProfileService";
import { UpdateProfileValidator } from "../../validators/users/UpdateProfileValidator";
import { AuthMiddleware, AuthPayload } from "../../middlewares/AuthMiddleware";
import { EmailService } from "@/backend/services/email/EmailService";
import { UserRepository } from "@/backend/repositories/UserRepository";
import { NotFoundError } from "@/backend/error/NotFoundError";

export class ProfileHandler {
  constructor(
    private readonly service: ProfileService,
    private readonly validator: UpdateProfileValidator,
    private readonly auth: AuthMiddleware,
    private readonly emailService: EmailService,
    private readonly userRepository: UserRepository
  ) {}

  async get(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const profile = await this.service.getProfile(user.userId);

    return Response.json(profile, { status: 200 });
  }

  async update(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    const userEmail = await this.userRepository.findEmailById(user.userId);
    if (!userEmail) {
      throw new NotFoundError("User");
    }

    this.validator.validate(body);

    const updatedProfile = await this.service.updateProfile(
      user.userId,
      body
    );

    try {
      await this.emailService.sendProfileUpdatedEmail(userEmail?.email, body.name);
    } catch (error) {
      console.error("Failed to send profile updated email:", error);
    }

    return Response.json(updatedProfile, { status: 200 });
  }
}
