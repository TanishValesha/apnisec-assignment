import { IssueHandler } from "@/backend/handlers/issues/IssueHandler";
import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { IssueRepository } from "@/backend/repositories/IssueRepository";
import { IssueService } from "@/backend/services/issues/IssueService";
import { JWTService } from "@/backend/utils/JWTService";
import { CreateIssueValidator } from "@/backend/validators/issues/CreateIssueValidator";
import { IssueTypeValidator } from "@/backend/validators/issues/IssueTypeValidator";


export class IssueFactory {
  static issueHandler() {
    return new IssueHandler(
      new IssueService(new IssueRepository()),
      new CreateIssueValidator(),
      new IssueTypeValidator(),
      new AuthMiddleware(new JWTService())
    );
  }
}
