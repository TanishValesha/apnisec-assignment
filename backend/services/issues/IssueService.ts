import { AuthError } from "@/backend/error/AuthError";
import { IssueRepository } from "../../repositories/IssueRepository";
import { CreateIssueDTO, UpdateIssueDTO } from "@/backend/types/issues.types";

export class IssueService {
  constructor(private readonly repo: IssueRepository) {}

  async createIssue(userId: string, data: CreateIssueDTO) {
    return this.repo.create({
      ...data,
      userId,
    });
  }

  async getIssues(userId: string, type?: string) {
    return this.repo.findAllByUser(userId, type);
  }

  async getIssueById(userId: string, issueId: string) {
    const issue = await this.repo.findById(issueId);
    if (!issue || issue.userId !== userId) {
      throw new AuthError("Issue not found");
    }
    return issue;
  }

  async updateIssue(
    userId: string,
    issueId: string,
    data: UpdateIssueDTO
  ) {
    await this.getIssueById(userId, issueId);
    return this.repo.update(issueId, data);
  }

  async deleteIssue(userId: string, issueId: string) {
    await this.getIssueById(userId, issueId);
    return this.repo.delete(issueId);
  }
}
