import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { Rol } from '../enums/rol.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  rol?: Rol; // opcional, por defecto será 'usuario'
}
