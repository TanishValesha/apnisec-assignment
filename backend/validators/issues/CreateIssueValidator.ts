import { ValidationError } from "@/backend/error/ValidationError";


export class CreateIssueValidator {
  validate(data: any) {
    const { title, description, type } = data;

    if (!title || !description || !type) {
      throw new ValidationError("Title, description and type are required");
    }

    const allowedTypes = [
      "Cloud Security",
      "Reteam Assessment",
      "VAPT",
    ];

    if (!allowedTypes.includes(type)) {
      throw new ValidationError("Invalid issue type");
    }
  }
}


