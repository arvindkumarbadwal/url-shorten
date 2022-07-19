import { Test, TestingModule } from '@nestjs/testing';
import { UrlShortenService } from './url-shorten.service';

describe('UrlShortenService', () => {
  let service: UrlShortenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlShortenService],
    }).compile();

    service = module.get<UrlShortenService>(UrlShortenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
