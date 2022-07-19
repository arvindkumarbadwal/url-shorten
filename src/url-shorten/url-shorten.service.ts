import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlShortenDto } from './dto/createUrlShorten.dto';
import { UrlEntity } from './url.entity';
import * as shortHash from 'shorthash2';

@Injectable()
export class UrlShortenService {
  constructor(
    @InjectRepository(UrlEntity) private urlsRepository: Repository<UrlEntity>,
  ) {}

  async generate(data: CreateUrlShortenDto): Promise<UrlEntity> {
    const urlCode = shortHash(data.longUrl);

    const existUrl = await this.urlsRepository.findOne({
      where: {
        urlCode: urlCode,
      },
    });

    if (existUrl) {
      return existUrl;
    }

    const url = this.urlsRepository.create({
      urlCode: urlCode,
      longUrl: data.longUrl,
    });
    await this.urlsRepository.save(url);

    return url;
  }

  async findByUrlCode(urlCode: string): Promise<UrlEntity> {
    return await this.urlsRepository.findOne({
      where: {
        urlCode: urlCode,
      },
    });
  }
}
