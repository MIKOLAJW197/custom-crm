import { UpdateArticleDTO } from './dto/update-article.dto';
import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { Controller, Get, Query, Param, Post, Body, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDTO } from './dto/create-article.dto';
import JwtAuthenticationGuard from 'src/authentication/guards/jwt-authentication.guard';
import { RequestWithUser } from 'src/authentication/authentication.controller';
import AuthorGuard from 'src/authentication/guards/author.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
    constructor(private readonly articleSerivce: ArticlesService) { }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.articleSerivce.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articleSerivce.findOne(id);
    }

    @Post()
    @UseGuards(JwtAuthenticationGuard)
    create(@Body() createArticleDto: CreateArticleDTO, @Req() { user }: RequestWithUser) {
        return this.articleSerivce.create(createArticleDto, user);
    }

    @Patch(':id')
    @UseGuards(JwtAuthenticationGuard, AuthorGuard)
    update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDTO) {
        return this.articleSerivce.update(id, updateArticleDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthenticationGuard, AuthorGuard)
    remove(@Param('id') id: string) {
        return this.articleSerivce.remove(id);
    }
}
