import { NoteHandler } from "@/backend/handlers/notes/NoteHandler";
import { NoteService } from "@/backend/services/notes/NoteService";
import { NoteRepository } from "@/backend/repositories/NoteRepository";
import { CreateNoteValidator } from "@/backend/validators/notes/CreateNoteValidator";
import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { JWTService } from "@/backend/utils/JWTService";

export class NoteFactory {
  static handler() {
    return new NoteHandler(
      new NoteService(new NoteRepository()),
      new CreateNoteValidator(),
      new AuthMiddleware(new JWTService())
    );
  }
}
