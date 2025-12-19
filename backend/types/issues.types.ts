export type IssueType =
  | "Cloud Security"
  | "Reteam Assessment"
  | "VAPT";

export interface CreateIssueDTO {
  title: string;
  description: string;
  type: IssueType;
  priority?: string;
  status?: string;
}

export interface UpdateIssueDTO {
  title?: string;
  description?: string;
  priority?: string;
  status?: string;
}
