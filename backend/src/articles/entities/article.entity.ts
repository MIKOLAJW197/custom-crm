import { User } from './../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

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
}