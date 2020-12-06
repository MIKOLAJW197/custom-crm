import { UpdateArticleDTO } from './dto/update-article.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { Article } from './entities/article.entity';
import { CreateArticleDTO } from './dto/create-article.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto): Promise<Article[]> {
    const { limit, offset } = paginationQuery;
    return this.articleRepository.find({
      relations: ['author', 'comments', 'comments.author'],
      skip: offset,
      take: limit,
    });
  }

  async findByUser(author: User): Promise<Article[]> {
    return this.articleRepository.find({
      relations: ['author', 'comments', 'comments.author'],
      where: {
        author: {
          id: author.id,
        },
      },
    });
  }

  async findOne(
    id: string,
    options?: FindOneOptions<Article>,
  ): Promise<Article | NotFoundException> {
    const article = await this.articleRepository.findOne(id, { ...options, relations: ['comments', 'author', 'comments.author'], });

    if (!article) {
      return new NotFoundException(`Article ${id} not found`);
    }

    return article;
  }

  async create(
    createArticleDto: CreateArticleDTO,
    author: User,
  ): Promise<Article> {
    const newArticle = this.articleRepository.create({
      ...createArticleDto,
      author,
    });
    return this.articleRepository.save(newArticle);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDTO,
  ): Promise<Article | NotFoundException> {
    const article = await this.articleRepository.preload({
      id: +id,
      ...updateArticleDto,
    });
    if (!article) {
      throw new NotFoundException(`Article #${id} not found`);
    }
    return this.articleRepository.save(article);
  }

  async remove(id: string): Promise<Article> {
    const article = await this.findOne(id);
    return this.articleRepository.remove(article as Article);
  }
}
