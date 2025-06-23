import { Rol } from "../enums/rol.enum";

export class CreateUserDto {
  email: string;
  password: string;
  rol?: Rol;
}