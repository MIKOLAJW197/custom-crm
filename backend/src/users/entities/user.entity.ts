import { Article } from './../../articles/entities/article.entity';
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    @Exclude()
    password: string;

    @Column({ default: false })
    isAdmin: boolean;

    @JoinTable()
    @OneToMany(
        () => Article,
        (article: Article) => article.author
    )
    articles: Article[];
}