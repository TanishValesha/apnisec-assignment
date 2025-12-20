import { AuthMiddleware, AuthPayload } from "@/backend/middlewares/AuthMiddleware";
import { NoteService } from "@/backend/services/notes/NoteService";
import { CreateNoteValidator } from "@/backend/validators/notes/CreateNoteValidator";

export class NoteHandler {
  constructor(
    private readonly service: NoteService,
    private readonly validator: CreateNoteValidator,
    private readonly auth: AuthMiddleware
  ) {}

  async list(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;

    const notes = await this.service.getNotes(user.userId);
    return Response.json({ count: notes.length, notes });
  }

  async create(req: Request) {
    const user = this.auth.verify(req) as AuthPayload;
    const body = await req.json();

    this.validator.validate(body);

    const note = await this.service.createNote(user.userId, body);
    return Response.json(note, { status: 201 });
  }
}
