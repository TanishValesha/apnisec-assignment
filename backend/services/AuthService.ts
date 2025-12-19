import { AuthError } from "../error/AuthError";
import { UserRepository } from "../repositories/UserRepository";
import { LoginDTO, RegisterDTO } from "../types/auth.types";
import { JWTService } from "../utils/JWTService";
import { PasswordService } from "../utils/PasswordService";


export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JWTService
  ) {}

  async register(data: RegisterDTO) {
    const userExists = await this.userRepo.findByEmail(data.email);
    if (userExists) throw new AuthError("User already exists");

    const hashedPassword = await this.passwordService.hash(data.password);

    const user = await this.userRepo.create({
      email: data.email,
      password: hashedPassword,
      name: data.name,
    });

    return this.jwtService.sign({ userId: user.id });
  }

  async login(data: LoginDTO) {
    const user = await this.userRepo.findByEmail(data.email);
    if (!user) throw new AuthError("Invalid credentials");

    const isValid = await this.passwordService.compare(
      data.password,
      user.password
    );
    if (!isValid) throw new AuthError("Invalid credentials");

    return this.jwtService.sign({ userId: user.id });
  }
}
