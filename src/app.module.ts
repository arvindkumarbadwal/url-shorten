import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortenModule } from './url-shorten/url-shorten.module';
import { UrlEntity } from './url-shorten/url.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'app_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UrlShortenModule,
    TypeOrmModule.forFeature([UrlEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
