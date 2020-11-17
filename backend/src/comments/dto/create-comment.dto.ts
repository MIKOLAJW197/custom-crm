import { IsString } from "class-validator";

export class CreateCommentDTO {
    @IsString()
    readonly text: string;
}