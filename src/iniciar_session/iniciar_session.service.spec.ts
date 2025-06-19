import { Test, TestingModule } from '@nestjs/testing';
import { IniciarSessionService } from './iniciar_session.service';

describe('IniciarSessionService', () => {
  let service: IniciarSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IniciarSessionService],
    }).compile();

    service = module.get<IniciarSessionService>(IniciarSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
