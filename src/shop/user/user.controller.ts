import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserMapper } from './mapper/user.mapper';
import { RegisterUserRequestDto } from './dto/user-register-request.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { Response } from 'express';

@Controller('shop')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMapper: UserMapper,
  ) {}

  @Post('customers/register')
  async registerUser(
    @Body() registerUserRequestDto: RegisterUserRequestDto,
    @Res() res: Response,
  ): Promise<void> {
    const newUser = await this.userService.registerUCustomer(
      registerUserRequestDto,
    );
    const response = this.userMapper.EntityToDto(newUser);
    res.status(HttpStatus.CREATED).json(response);
  }

  @Post('customers/login')
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
    @Res() res: Response,
  ): Promise<void> {
    const response = await this.userService.loginCustomer(loginUserDto);
    res.status(HttpStatus.OK).send(response);
  }
}
