import { ProfileService } from "../../services/users/ProfileService";
import { UpdateProfileValidator } from "../../validators/users/UpdateProfileValidator";
import { AuthMiddleware, AuthPayload } from "../../middlewares/AuthMiddleware";

export class ProfileHandler {
  constructor(
    private readonly service: ProfileService,
    private readonly validator: UpdateProfileValidator,
    private readonly auth: AuthMiddleware
  ) {}

  async get(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const profile = await this.service.getProfile(user.userId);

    return Response.json(profile, { status: 200 });
  }

  async update(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    this.validator.validate(body);

    const updatedProfile = await this.service.updateProfile(
      user.userId,
      body
    );

    return Response.json(updatedProfile, { status: 200 });
  }
}
