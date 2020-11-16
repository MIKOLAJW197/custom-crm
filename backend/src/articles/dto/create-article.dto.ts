import { IsString } from "class-validator";

export class CreateArticleDTO {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly content: string;
}