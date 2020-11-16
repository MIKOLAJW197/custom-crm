import { User } from './../users/entities/user.entity';
import { CreateUserDTO } from './../users/dto/create-user.dto';
import { Body, Req, Controller, HttpCode, Post, UseGuards, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import { Response, Request } from "express";
import JwtAuthenticationGuard from './guards/jwt-authentication.guard';
import { ApiTags } from '@nestjs/swagger';

export interface RequestWithUser extends Request {
    user: User;
}
@ApiTags('auth')
@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) { }

    @Post('register')
    async register(@Body() registrationData: CreateUserDTO): Promise<User> {
        return this.authenticationService.register(registrationData);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthenticationGuard)
    @Post('login')
    async logIn(@Req() { user }: RequestWithUser, @Res() response: Response): Promise<Response<User>> {
        const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
        response.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return response.send(user);
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('logout')
    async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
        return response.sendStatus(200);
    }
}