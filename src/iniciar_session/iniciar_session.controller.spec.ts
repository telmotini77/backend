import { Test, TestingModule } from '@nestjs/testing';
import { IniciarSessionController } from './iniciar_session.controller';

describe('IniciarSessionController', () => {
  let controller: IniciarSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IniciarSessionController],
    }).compile();

    controller = module.get<IniciarSessionController>(IniciarSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
