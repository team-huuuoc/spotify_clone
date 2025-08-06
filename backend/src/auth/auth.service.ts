import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import {
  ConflictError,
  ForbiddenError,
  UnauthorizedError,
} from 'src/response/HttpErrors';
import { ErrorCode } from 'src/response/ErrorCode';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { OtpService } from 'src/otp/otp.service';
import { compareData, hashData } from 'src/libs/bcrypt/handle.password';
import { RegisterByEmailDto } from './dto/register-by-email.dto';
import { RegisterByPhoneDto } from './dto/register-by-phone.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly otpService: OtpService,
  ) {}
  public async registerByEmail(userInput: RegisterByEmailDto) {
    let user = await this.userService.getUserByEmail(userInput.email);
    if (user) throw new ConflictError(ErrorCode.EMAIL_IS_EXISTS);
    const hashPassword = await hashData(userInput.password);
    await this.otpService.verifyOtp(userInput.email, userInput.code);
    return await this.prismaService.user.create({
      data: {
        hashedPassword: hashPassword,
        name: userInput.name,
        email: userInput.email,
        dateOfBirth: userInput.dateOfBirth
          ? new Date(userInput.dateOfBirth as string)
          : undefined,
      },
      select: {
        name: true,
        email: true,
        dateOfBirth: true,
      },
    });
  }
  public async registerByPhone(userInput: RegisterByPhoneDto) {}
  // public async login(userInput: LoginDto) {
  //   const user = await this.userService.getUserByEmail(userInput.email);
  //   const isValidPassword = await compareData(
  //     userInput.password,
  //     user.hashedPassword,
  //   );
  //   if (!isValidPassword)
  //     throw new UnauthorizedError(ErrorCode.PASSWORD_IS_NOT_CORRECT);
  //   const token = await this._generateToken(user.id, user.email, user.name);
  //   await this._updateRtHash(user.id, token.refreshToken);
  //   return token;
  // }
  public async logout(userId: number) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: { hashRefreshToken: null },
    });
  }
  // public async refreshTokens(rt: string) {
  //   try {
  //     const secret = this.configService.get<string>("JWT_REFRESH_TOKEN");
  //     const payload = await this.jwtService.verify(rt, { secret });
  //     const userId = payload.id;
  //     const user = await this.userService.getUserById(userId);
  //     if (!user || !user.hashRefreshToken)
  //       throw new ForbiddenError(ErrorCode.ACCESS_DENIED);

  //     const rtMatches = await compareData(rt, user.hashRefreshToken);
  //     if (!rtMatches) throw new ForbiddenError(ErrorCode.ACCESS_DENIED);

  //     const tokens = await this._generateToken(user.id, user.email, user.name);
  //     await this._updateRtHash(user.id, tokens.refreshToken);
  //     return tokens;
  //   } catch (error) {
  //     throw new ForbiddenError(ErrorCode.ACCESS_DENIED);
  //   }
  // }

  private async _generateToken(
    userId: number,
    email: string,
    userName: string,
  ) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { id: userId, email, userName },
        { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '15m' },
      ),
      this.jwtService.signAsync(
        { id: userId, email, userName },
        { secret: process.env.JWT_REFRESH_TOKEN, expiresIn: '7d' },
      ),
    ]);
    return { accessToken, refreshToken };
  }
  private async _updateRtHash(userId: number, rt: string) {
    const hash = await hashData(rt);
    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        hashRefreshToken: hash,
      },
    });
  }
}
