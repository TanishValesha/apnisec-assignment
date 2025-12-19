import { ValidationError } from "@/backend/error/ValidationError";
import { UpdateProfileDTO } from "@/backend/types/user.types";


export class UpdateProfileValidator {
  validate(data: UpdateProfileDTO) {
    if (!data.name && !data.email) {
      throw new ValidationError("At least one field is required to update");
    }

    if (data.email && !data.email.includes("@")) {
      throw new ValidationError("Invalid email format");
    }
  }
}
