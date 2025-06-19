import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IniciarSessionController } from './iniciar_session/iniciar_session.controller';
import { IniciarSessionModule } from './iniciar_session/iniciar_session.module';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'piensa',
  autoLoadEntities: true,
  synchronize: true, // Set to false in production
  }),
    IniciarSessionModule, RegisterModule],
  controllers: [AppController, IniciarSessionController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
