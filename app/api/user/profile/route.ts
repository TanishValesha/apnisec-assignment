import { AppError } from "@/backend/error/AppError";
import { UserFactory } from "@/backend/factories/users/UserFactory";


export async function GET(req: Request) {
  try {
    return await UserFactory.profileHandler().get(req);
  } catch (e: any) {
    if (e instanceof AppError) {
      return Response.json(
        { message: e.message },
        { status: e.statusCode }
      );
    }
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    return await UserFactory.profileHandler().update(req);
  } catch (e: any) {
    if (e instanceof AppError) {
      return Response.json(
        { message: e.message },
        { status: e.statusCode }
      );
    }
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
