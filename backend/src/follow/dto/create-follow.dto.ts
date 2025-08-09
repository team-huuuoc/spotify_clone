import { FollowType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateFollowDto {
  @IsString()
  @IsNotEmpty()
  targetId: string;

  @IsEnum(FollowType)
  @IsNotEmpty()
  type: FollowType;
}
