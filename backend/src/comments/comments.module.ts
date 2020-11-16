import { User } from '../users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Article } from 'src/articles/entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, User, Comment])],
  providers: [],
  controllers: []
})
export class CommentsModule { }
