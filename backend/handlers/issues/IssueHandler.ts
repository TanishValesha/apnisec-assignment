import { AuthMiddleware, AuthPayload } from "@/backend/middlewares/AuthMiddleware";
import { RateLimitMiddleware } from "@/backend/middlewares/RateLimitMiddleware";
import { IssueService } from "@/backend/services/issues/IssueService";
import { CreateIssueValidator } from "@/backend/validators/issues/CreateIssueValidator";
import { IssueTypeValidator } from "@/backend/validators/issues/IssueTypeValidator";

export class IssueHandler {
  constructor(
    private readonly service: IssueService,
    private readonly validator: CreateIssueValidator,
    private readonly typeValidator: IssueTypeValidator,
    private readonly auth: AuthMiddleware,
    private readonly rateLimit: RateLimitMiddleware
  ) {}

  async create(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    this.validator.validate(body);

    const issue = await this.service.createIssue(user.userId, body);
    return Response.json(issue, { status: 201 });
  }

  async list(req: Request) {
    const rateHeaders = this.rateLimit.check(req)
    const user = this.auth.verify(req) as AuthPayload;
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

    const issue = await this.service.getIssueById(user.userId, id);
    return Response.json(issue, { status: 200 });
  }

  async update(req: Request, id: string) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();


    const updatedIssue = await this.service.updateIssue(
      user.userId,
      id,
      body
    );

    return Response.json(updatedIssue, { status: 200 });
  }

  async delete(req: Request, id: string) {
    const user = this.auth.verify(req) as AuthPayload;

    await this.service.deleteIssue(user.userId, id);
    return Response.json(
      { message: "Issue deleted" },
      { status: 200 }
    );
  }
}
