import { Test, TestingModule } from '@nestjs/testing';
import { UrlShortenController } from './url-shorten.controller';

describe('UrlShortenController', () => {
  let controller: UrlShortenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlShortenController],
    }).compile();

    controller = module.get<UrlShortenController>(UrlShortenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
