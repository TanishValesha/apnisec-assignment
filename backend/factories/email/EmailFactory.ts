import { EmailService } from "@/backend/services/email/EmailService";


export class EmailFactory {
  static create() {
    return new EmailService();
  }
}
