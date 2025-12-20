import { RateLimitMiddleware } from "@/backend/middlewares/RateLimitMiddleware";
import { AuthService } from "../../services/auth/AuthService";
import { LoginValidator } from "../../validators/auth/LoginValidator";
import { RegisterValidator } from "../../validators/auth/RegisterValidator";
import { EmailService } from "@/backend/services/email/EmailService";

export class AuthHandler {
  constructor(
    private readonly authService: AuthService,
    private readonly registerValidator: RegisterValidator,
    private readonly loginValidator: LoginValidator,
    private readonly rateLimit: RateLimitMiddleware,
    private readonly emailService: EmailService
  ) {}

  async register(req: Request) {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const body = await req.json();

    const rateHeaders = this.rateLimit.check(
      `ip:${ip}:auth:register`
    );

    this.registerValidator.validate(body);

    await this.emailService.sendWelcomeEmail(body.email, body.name)

    const token = await this.authService.register(body);
    return Response.json({ token, rateHeaders }, { status: 201 });
  }

  async login(req: Request) {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const body = await req.json();

    const rateHeaders = this.rateLimit.check(
      `ip:${ip}:auth:login`
    );

    this.loginValidator.validate(body);

    const token = await this.authService.login(body);
    return Response.json({ token, rateHeaders }, { status: 200 });
  }

  async logout(req: Request) {
    return Response.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  }
}
