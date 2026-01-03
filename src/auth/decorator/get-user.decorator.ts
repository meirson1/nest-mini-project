import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type JwtUser = {
  sub: number;
  email: string;
};

export const GetUser = createParamDecorator(
  (data: keyof JwtUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{ user: JwtUser }>();
    const user = request.user;
    return data ? user[data] : user;
  },
);
