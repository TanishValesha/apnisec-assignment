
import { ValidationError } from "@/backend/error/ValidationError";

export class CreateNoteValidator {
  validate(body: any) {
    if (!body.title || !body.content) {
      throw new ValidationError("Title and content are required");
    }
  }
}
