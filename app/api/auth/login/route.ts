import { AppError } from "@/backend/error/AppError";
import { AuthFactory } from "@/backend/factories/auth/AuthFactory";

export async function POST(req: Request) {
  try {
    return await AuthFactory.createAuthHandler().login(req);
  } catch (err: any) {
    if (err instanceof AppError) {
      return Response.json({ message: err.message }, { status: err.statusCode });
    }
    return Response.json({ message: "Server error" , err: err.message }, { status: 500 });
  }
}
