import { AppError } from "@/backend/error/AppError";
import { NoteFactory } from "@/backend/factories/notes/NoteFactory";

export async function GET(req: Request) {
  try {
    return await NoteFactory.handler().list(req);
  } catch (e: any) {
    if (e instanceof AppError) {
      return Response.json({ message: e.message }, { status: e.statusCode });
    }
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    return await NoteFactory.handler().create(req);
  } catch (e: any) {
    if (e instanceof AppError) {
      return Response.json({ message: e.message }, { status: e.statusCode });
    }
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
