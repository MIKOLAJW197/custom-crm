import { User } from './../users/entities/user.entity';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article, User])],
  providers: [ArticlesService],
  controllers: [ArticlesController]
})
export class ArticlesModule { }
