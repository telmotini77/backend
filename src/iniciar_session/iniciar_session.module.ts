import { Module } from '@nestjs/common';
import { IniciarSessionService } from './iniciar_session.service';
import { IniciarSessionController } from './iniciar_session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IniciarSession } from './iniciar_session.entity';
@Module({
  imports: [TypeOrmModule.forFeature([IniciarSession])],
  controllers: [IniciarSessionController],
  providers: [IniciarSessionService],
  exports: [IniciarSessionService],
})
export class IniciarSessionModule {}
