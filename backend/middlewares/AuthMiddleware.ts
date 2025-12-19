import { AuthError } from "../error/AuthError";
import { JWTService } from "../utils/JWTService";

export interface AuthPayload {
  userId: string;
}

export class AuthMiddleware {
  constructor(private jwtService: JWTService) {}

  verify(req: Request): AuthPayload {
    const token = req.headers
      .get("authorization")
      ?.replace("Bearer ", "");

    if (!token) throw new AuthError("Token missing");

    try {
      return this.jwtService.verify(token) as AuthPayload;
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        throw new AuthError("Token expired");
      }
      throw new AuthError("Invalid token");
    }
  }
}
