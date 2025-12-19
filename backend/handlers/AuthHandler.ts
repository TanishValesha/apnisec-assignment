import { AuthService } from "../services/AuthService";
import { LoginValidator } from "../validators/LoginValidator";
import { RegisterValidator } from "../validators/RegisterValidator";

export class AuthHandler {
  constructor(
    private readonly authService: AuthService,
    private readonly registerValidator: RegisterValidator,
    private readonly loginValidator: LoginValidator
  ) {}

  async register(req: Request) {
    const body = await req.json();
    this.registerValidator.validate(body);

    const token = await this.authService.register(body);
    return Response.json({ token }, { status: 201 });
  }

  async login(req: Request) {
    const body = await req.json();
    this.loginValidator.validate(body);

    const token = await this.authService.login(body);
    return Response.json({ token }, { status: 200 });
  }

  async logout(req: Request) {
    return Response.json({ message: "Logged out successfully" }, { status: 200 });
  }
}
