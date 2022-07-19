import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from './url.entity';
import { UrlShortenService } from './url-shorten.service';
import { UrlShortenController } from './url-shorten.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  providers: [UrlShortenService],
  controllers: [UrlShortenController],
  exports: [UrlShortenService],
})
export class UrlShortenModule {}
