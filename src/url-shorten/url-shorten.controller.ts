import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUrlShortenDto } from './dto/createUrlShorten.dto';
import { UrlShortenService } from './url-shorten.service';

@Controller('url-shorten')
@UseInterceptors(ClassSerializerInterceptor)
export class UrlShortenController {
  constructor(private urlShortenService: UrlShortenService) {}

  @Post()
  async generate(@Body() postData: CreateUrlShortenDto) {
    return this.urlShortenService.generate(postData);
  }

  @Get(':urlCode')
  async findByUrlCode(@Param('urlCode') urlCode: string) {
    return this.urlShortenService.findByUrlCode(urlCode);
  }
}
