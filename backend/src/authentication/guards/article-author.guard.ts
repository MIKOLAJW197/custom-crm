import { ArticlesService } from '../../articles/articles.service';
import { RequestWithUser } from 'src/authentication/authentication.controller';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Article } from 'src/articles/entities/article.entity';

@Injectable()
export default class ArticleAuthorGuard implements CanActivate {
    constructor(
        private readonly articlesService: ArticlesService
    ) { }

    async canActivate(
        context: ExecutionContext
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest<RequestWithUser>();
        const { id } = request.params;
        const { user } = request;
        const article = await this.articlesService.findOne(id, { relations: ['author'] });

        return (article as Article).author.id === user.id;
    };
}