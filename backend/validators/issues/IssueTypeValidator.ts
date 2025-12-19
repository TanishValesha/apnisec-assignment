import { ValidationError } from "@/backend/error/ValidationError";


export class IssueTypeValidator {
  validate(type: string) {
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


