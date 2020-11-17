import { User } from '../users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Article } from 'src/articles/entities/article.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { ArticlesModule } from 'src/articles/articles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Article, User, Comment]), ArticlesModule],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule { }
