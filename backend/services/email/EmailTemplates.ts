import { IssueCreatedEmailData, ProfileUpdatedEmailData, WelcomeEmailData } from "@/backend/types/email.types";

export class EmailTemplates {
    static welcome(data: WelcomeEmailData) {
        return `
      <h2>Welcome to ApniSec 🚀</h2>
      <p>Hello <strong>${data.name}</strong>,</p>
      <p>Your account has been successfully created.</p>
      <p>Start reporting security issues today.</p>
    `;
    }

    static issueCreated(data: IssueCreatedEmailData) {
    return `
      <h2>🛡️ Issue Created</h2>
      <p><strong>Type:</strong> ${data.type}</p>
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Description:</strong></p>
      <p>${data.description}</p>
    `;
  }

  static profileUpdated(data: ProfileUpdatedEmailData) {
    return `
      <h2>Profile Updated for ${data.email}</h2>
      <p>${data.name ? `Hello ${data.name},` : "Hello,"}</p>
      <p>Your profile information has been updated successfully.</p>
    `;
  }
}