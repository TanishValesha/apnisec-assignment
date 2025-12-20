import prisma from "@/backend/lib/prisma";

export class NoteRepository {
  create(userId: string, data: { title: string; content: string }) {
    return prisma.note.create({
      data: { ...data, userId },
    });
  }

  findAllByUser(userId: string) {
    return prisma.note.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
}
