export class UpdateIssueValidator {
  validate(data: any) {
    if (Object.keys(data).length === 0) {
      throw new Error("Nothing to update");
    }
  }
}
