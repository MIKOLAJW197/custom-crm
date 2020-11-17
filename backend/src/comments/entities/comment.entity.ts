import { User } from './../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Article } from '../../articles/entities/article.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    createdAt: string;

    @ManyToOne(
        () => User,
        (author: User) => author.comments,
    )
    author: User;

    @ManyToOne(
        () => Article,
        (article: Article) => article.comments,
    )
    article: Article;
}