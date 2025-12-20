import { IssueReadHandler } from "@/backend/handlers/issues/IssueReadHandler";
import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { IssueRepository } from "@/backend/repositories/IssueRepository";
import { IssueService } from "@/backend/services/issues/IssueService";
import { JWTService } from "@/backend/utils/JWTService";
import { CreateIssueValidator } from "@/backend/validators/issues/CreateIssueValidator";
import { IssueTypeValidator } from "@/backend/validators/issues/IssueTypeValidator";
import { RateLimitFactory } from "../rate-limit/RateLimitFactory";
import { IssueWriteHandler } from "@/backend/handlers/issues/IssueWriteHandler";


export class IssueFactory {
  static readHandler() {
    return new IssueReadHandler(
      new IssueService(new IssueRepository()),
      new IssueTypeValidator(),
      new AuthMiddleware(new JWTService()),
      RateLimitFactory.issueRead()
    );
  }

  static writeHandler() {
    return new IssueWriteHandler(
      new IssueService(new IssueRepository()),
      new CreateIssueValidator(),
      new AuthMiddleware(new JWTService()),
      RateLimitFactory.issueWrite()
    );
  }
}
