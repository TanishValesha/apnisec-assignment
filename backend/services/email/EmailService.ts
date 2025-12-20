import { Resend } from "resend";
import { EmailTemplates } from "./EmailTemplates";


export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendWelcomeEmail(to: string, name: string) {
    await this.resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject: "Welcome to ApniSec 🚀",
      html: EmailTemplates.welcome({ name }),
    });
  }

  async sendIssueCreatedEmail(
    to: string,
    data: { title: string; description: string; type: string }
  ) {
    await this.resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject: "New Issue Created",
      html: EmailTemplates.issueCreated({ email: to, ...data }),
    });
  }

  async sendProfileUpdatedEmail(to: string, name?: string) {
    await this.resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject: "Profile Updated",
      html: EmailTemplates.profileUpdated({ name, email: to }),
    });
  }
}
