export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { AuthMiddleware } from "@/backend/middlewares/AuthMiddleware";
import { JWTService } from "@/backend/utils/JWTService";
import { MeHandler } from "./handler";
import { UserRepository } from "@/backend/repositories/UserRepository";
import { AppError } from "@/backend/error/AppError";


const handler = new MeHandler(
  new AuthMiddleware(new JWTService()),
  new UserRepository()
);

export async function GET(req: Request) {
  try {
    return await handler.get(req);
  } catch (err: any) {
    if (err instanceof AppError) {
      return Response.json({ message: err.message }, { status: err.statusCode });
    }
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
