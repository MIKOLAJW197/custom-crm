import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { RequestWithUser } from "../authentication.controller";

@Injectable()
export default class AdminGuard implements CanActivate {

    canActivate(
        context: ExecutionContext
    ): boolean {
        const request = context.switchToHttp().getRequest<RequestWithUser>();
        const { user } = request;

        return user.isAdmin;
    };
}