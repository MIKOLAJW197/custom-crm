import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async findAll(paginationQuery: PaginationQueryDto): Promise<User[]> {
        const { limit, offset } = paginationQuery;
        return this.usersRepository.find({
            relations: [],
            skip: offset,
            take: limit,
        });
    }

    async getById(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({ id });
        if (user) {
            return user;
        }
        throw new NotFoundException(`User with id: ${id} does not exist`);
    }

    async getByEmail(email: string): Promise<User> {
        const user = await this.usersRepository.findOne({ email });
        if (user) {
            return user;
        }
        throw new NotFoundException(`User with email: ${email} does not exist`);
    }

    async create(userData: CreateUserDTO): Promise<User> {
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }
}
