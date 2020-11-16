import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { UsersService } from './users.service';
import { Controller, Query, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from 'src/authentication/guards/jwt-authentication.guard';
import AdminGuard from 'src/authentication/guards/admin.guard';

@ApiTags('users')
@UseGuards(JwtAuthenticationGuard, AdminGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.usersService.findAll(paginationQuery);
    }
}
