import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ArticlesService } from "src/articles/articles.service";
import { Article } from "src/articles/entities/article.entity";
import { User } from "src/users/entities/user.entity";
import { FindOneOptions, Repository } from "typeorm";
import { CreateCommentDTO } from "./dto/create-comment.dto";
import { Comment } from "./entities/comment.entity";


@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        private readonly articlesService: ArticlesService
    ) { }

    async findOne(id: string, options?: FindOneOptions<Comment>): Promise<Comment | NotFoundException> {
        const comment = await this.commentRepository.findOne(id, { ...options });

        if (!comment) {
            return new NotFoundException(`Comment ${id} not found`);
        }

        return comment;
    }

    async getComments(articleId: string) {
        const article = await this.articlesService.findOne(articleId, { relations: ['comments'] });
        return (article as Article).comments;
    }

    async addComment(articleId: string, createCommentDTO: CreateCommentDTO, author: User) {
        const article = await this.articlesService.findOne(articleId);
        const newComment = this.commentRepository.create({ ...createCommentDTO, createdAt: (+new Date).toString(), author, article: (article as Article) });
        return this.commentRepository.save(newComment);
    }

    async remove(id: string): Promise<Comment> {
        const comment = await this.findOne(id);
        return this.commentRepository.remove(comment as Comment);
    }

}
