import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IniciarSession } from './iniciar_session.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class IniciarSessionService {
  constructor(
    @InjectRepository(IniciarSession)
    private sessionRepository: Repository<IniciarSession>,
  ) {}

  // Registrar usuario (opcional)
  async register(email: string, password: string): Promise<IniciarSession> {
    const hashed = await bcrypt.hash(password, 10);
    const user = this.sessionRepository.create({ email, password: hashed });
    return this.sessionRepository.save(user);
  }

  // Buscar usuario por email
  async findByEmail(email: string): Promise<IniciarSession | undefined> {
    const user = await this.sessionRepository.findOne({ where: { email } });
    return user === null ? undefined : user;
  }

  // Validar usuario (login)
  async validateUser(email: string, password: string): Promise<boolean> {
    const user = await this.findByEmail(email);
    if (!user) return false;
    return bcrypt.compare(password, user.password);
  }
}