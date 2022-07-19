import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlEntity } from './url-shorten/url.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UrlEntity) private urlsRepository: Repository<UrlEntity>,
  ) {}

  getHello(): string {
    return 'A Sample URL Shorten Application';
  }

  async findByUrlCode(urlCode: string): Promise<UrlEntity> {
    return await this.urlsRepository.findOne({
      where: {
        urlCode: urlCode,
      },
    });
  }
}
