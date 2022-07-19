import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('r/:urlCode')
  async findByUrlCode(@Param('urlCode') urlCode: string, @Res() res: Response) {
    const url = await this.appService.findByUrlCode(urlCode);

    if (url) {
      return res.redirect(HttpStatus.PERMANENT_REDIRECT, url.longUrl);
    }

    return res.status(HttpStatus.NOT_FOUND).json({
      message: 'NOT FOUND',
    });
  }
}
