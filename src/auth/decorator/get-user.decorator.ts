import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtUser } from 'src/auth/types/jwt-user.type';

export const GetUser = createParamDecorator(
  (data: keyof JwtUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: JwtUser }>();
    const user = request.user;
    return data ? user[data] : user;
  },
);
