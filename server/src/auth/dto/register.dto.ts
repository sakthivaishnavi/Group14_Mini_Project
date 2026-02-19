// auth/dto/register.dto.ts
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { ROLES } from 'src/user/roles';

export class RegisterDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  current_organisation?: string;

  @IsOptional()
  bio?: string;

  @IsOptional()
  role?: ROLES;
}
