import { User } from './../../users/entities/user.entity';
import { Comment } from './../../comments/entities/comment.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToMany } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @ManyToOne(
        () => User,
        (author: User) => author.articles,
    )
    author: User;

    @JoinTable()
    @OneToMany(
        () => Comment,
        (comment: Comment) => comment.article
    )
    comments: Comment[];
}