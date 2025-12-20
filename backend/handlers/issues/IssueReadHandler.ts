import { AuthMiddleware, AuthPayload } from "@/backend/middlewares/AuthMiddleware";
import { RateLimitMiddleware } from "@/backend/middlewares/RateLimitMiddleware";
import { IssueService } from "@/backend/services/issues/IssueService";
import { IssueTypeValidator } from "@/backend/validators/issues/IssueTypeValidator";

export class IssueReadHandler {
  constructor(
    private readonly service: IssueService,
    private readonly typeValidator: IssueTypeValidator,
    private readonly auth: AuthMiddleware,
    private readonly rateLimit: RateLimitMiddleware
  ) {}

  async list(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const rateHeaders = this.rateLimit.check(`user:${user.userId}`);
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || undefined;

    if (type) {
      this.typeValidator.validate(type);
    }

    const issues = await this.service.getIssues(user.userId, type);
    return Response.json({"count": issues.length, "issues": issues, "headers": rateHeaders}, { status: 200 });
  }

  async get(req: Request, id: string) {
    const user = this.auth.verify(req) as AuthPayload;
    const rateHeaders = this.rateLimit.check(`user:${user.userId}`);

    const issue = await this.service.getIssueById(user.userId, id);
    return Response.json({issue, rateHeaders},  { status: 200 });
  }

}
