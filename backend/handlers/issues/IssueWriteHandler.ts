import { NotFoundError } from "@/backend/error/NotFoundError";
import {
  AuthMiddleware,
  AuthPayload,
} from "@/backend/middlewares/AuthMiddleware";
import { RateLimitMiddleware } from "@/backend/middlewares/RateLimitMiddleware";
import { UserRepository } from "@/backend/repositories/UserRepository";
import { EmailService } from "@/backend/services/email/EmailService";
import { IssueService } from "@/backend/services/issues/IssueService";
import { CreateIssueValidator } from "@/backend/validators/issues/CreateIssueValidator";

export class IssueWriteHandler {
  constructor(
    private readonly service: IssueService,
    private readonly validator: CreateIssueValidator,
    private readonly auth: AuthMiddleware,
    private readonly rateLimit: RateLimitMiddleware,
    private readonly emailService: EmailService,
    private readonly userRepository: UserRepository
  ) {}

  async create(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    const userEmail = await this.userRepository.findEmailById(user.userId);
    if (!userEmail) {
      throw new NotFoundError("User");
    }

    this.validator.validate(body);

    const issue = await this.service.createIssue(user.userId, body);

    try {
      await this.emailService.sendIssueCreatedEmail(userEmail?.email, {
        title: body.title,
        description: body.description,
        type: body.type,
      });
    } catch (error) {
      console.error("Failed to send issue created email:", error);
    }

    return Response.json(issue, { status: 201 });
  }

  async update(req: Request, id: string) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    const updatedIssue = await this.service.updateIssue(user.userId, id, body);

    return Response.json(updatedIssue, { status: 200 });
  }

  async delete(req: Request, id: string) {
    const user = this.auth.verify(req) as AuthPayload;

    await this.service.deleteIssue(user.userId, id);
    return Response.json({ message: "Issue deleted" }, { status: 200 });
  }
}
