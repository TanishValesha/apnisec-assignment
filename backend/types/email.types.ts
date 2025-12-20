export interface WelcomeEmailData {
  name: string;
}

export interface IssueCreatedEmailData {
  email: string;
  title: string;
  description: string;
  type: string;
}

export interface ProfileUpdatedEmailData {
  email: string;
  name?: string;
}
