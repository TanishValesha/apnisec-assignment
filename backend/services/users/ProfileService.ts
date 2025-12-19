import { AuthError } from "@/backend/error/AuthError";
import { UserRepository } from "../../repositories/UserRepository";
import { UpdateProfileDTO } from "../../types/user.types";


export class ProfileService {
  constructor(private readonly userRepo: UserRepository) {}

  async getProfile(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new AuthError("User not found");

    return user;
  }

  async updateProfile(userId: string, data: UpdateProfileDTO) {
    return this.userRepo.update(userId, data);
  }
}
