import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { UserRepository } from "@/backend/repositories/UserRepository";


export class MeHandler {
  constructor(
    private readonly auth: AuthMiddleware,
    private readonly users: UserRepository
  ) {}

  async get(req: Request) {
    const payload = this.auth.verify(req);
    const user = await this.users.findById(payload.userId);

    return Response.json({ user });
  }
}
