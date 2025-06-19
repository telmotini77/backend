import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Register } from './register.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
  ) {}

  async register(data: {
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    password: string;
    confirmar_password: string;
  }): Promise<Register> {
    if (data.password !== data.confirmar_password) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }
    const hashed = await bcrypt.hash(data.password, 10);
    const user = this.registerRepository.create({
      nombres: data.nombres,
      apellidos: data.apellidos,
      correo: data.correo,
      telefono: data.telefono,
      password: hashed,
    });
    return this.registerRepository.save(user);
  }

  async findByCorreo(correo: string): Promise<Register | undefined> {
    const user = await this.registerRepository.findOne({ where: { correo } });
    return user === null ? undefined : user;
  }

  async validateUser(correo: string, password: string): Promise<boolean> {
    const user = await this.findByCorreo(correo);
    if (!user) return false;
    return bcrypt.compare(password, user.password);
  }
}