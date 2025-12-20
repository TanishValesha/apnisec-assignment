import { AppError } from "@/backend/error/AppError";
import { IssueFactory } from "@/backend/factories/issues/IssueFactory";

export async function GET(req: Request) {
  try {
    return await IssueFactory.readHandler().list(req);
  } catch (e: any) {
    if (e instanceof AppError)
      return Response.json({ message: e.message }, { status: e.statusCode });
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    return await IssueFactory.writeHandler().create(req);
  } catch (e: any) {
    if (e instanceof AppError)
      return Response.json({ message: e.message }, { status: e.statusCode });
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
