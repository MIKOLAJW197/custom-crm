import { CreateArticleDTO } from './create-article.dto';
import { PartialType } from '@nestjs/swagger'

export class UpdateArticleDTO extends PartialType(CreateArticleDTO) {
}