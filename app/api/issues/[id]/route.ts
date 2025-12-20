import { AppError } from "@/backend/error/AppError";
import { IssueFactory } from "@/backend/factories/issues/IssueFactory";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    return await IssueFactory.readHandler().get(req, id);
  } catch (e: any) {
    if (e instanceof AppError)
      return Response.json({ message: e.message }, { status: e.statusCode });
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }>}) {
  const { id } = await context.params;
  try {
    return await IssueFactory.writeHandler().update(req, id);
  } catch (e: any) {
    if (e instanceof AppError)
      return Response.json({ message: e.message }, { status: e.statusCode });
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    return await IssueFactory.writeHandler().delete(req, id);
  } catch (e: any) {
    if (e instanceof AppError)
      return Response.json({ message: e.message }, { status: e.statusCode });
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
