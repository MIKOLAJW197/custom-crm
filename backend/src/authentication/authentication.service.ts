import { CreateUserDTO } from './../users/dto/create-user.dto';
import { PostgresErrorCode } from './../database/postgresErrorCodes.enum';
import { UsersService } from './../users/users.service';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export interface TokenPayload {
    userId: number;
}

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }

    async register(createUserDto: CreateUserDTO) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        try {
            const createdUser = await this.usersService.create({
                ...createUserDto,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAuthenticatedUser(email: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.getByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword
        );
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    getCookieWithJwtToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
    }

    getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}