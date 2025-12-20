import { NoteRepository } from "@/backend/repositories/NoteRepository";

export class NoteService {
  constructor(private readonly repo: NoteRepository) {}

  createNote(userId: string, data: { title: string; content: string }) {
    return this.repo.create(userId, data);
  }

  getNotes(userId: string) {
    return this.repo.findAllByUser(userId);
  }
}
