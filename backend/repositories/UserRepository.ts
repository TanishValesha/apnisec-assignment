import prisma from "../lib/prisma";
import { UpdateProfileDTO } from "../types/user.types";

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
  }

  async create(data: { email: string; password: string; name?: string }) {
    return prisma.user.create({ data });
  }

  async update(id: string, data: UpdateProfileDTO) {
    return prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        updatedAt: true,
      },
    });
  }
}
