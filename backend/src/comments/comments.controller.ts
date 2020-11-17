import { Controller, Get, Query, Param, Post, UseGuards, Body, Req, Patch, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RequestWithUser } from "src/authentication/authentication.controller";
import JwtAuthenticationGuard from "src/authentication/guards/jwt-authentication.guard";
import { CommentsService } from "./comments.service";
import { CreateCommentDTO } from "./dto/create-comment.dto";


@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Get(':id')
    getArticleComments(@Param('id') articleId: string) {
        return this.commentsService.getComments(articleId);
    }

    @Post(':id')
    @UseGuards(JwtAuthenticationGuard)
    create(@Param('id') articleId: string, @Body() createCommentDTO: CreateCommentDTO, @Req() { user }: RequestWithUser) {
        return this.commentsService.addComment(articleId, createCommentDTO, user);
    }
    //todo ad guard
    @Delete(':id')
    @UseGuards(JwtAuthenticationGuard)
    remove(@Param('id') commentId: string) {
        return this.commentsService.remove(commentId);
    }
}
