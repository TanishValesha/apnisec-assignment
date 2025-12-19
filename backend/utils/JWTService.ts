import jwt from "jsonwebtoken";

export class JWTService {
  private readonly secret = process.env.JWT_SECRET!;

  sign(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }

  verify(token: string): unknown {
    return jwt.verify(token, this.secret);
  }
}
