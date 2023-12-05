import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserMapper } from './mapper/user.mapper';
import { RegisterUserRequestDto } from './dto/user-register-request.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { NotFoundUserException } from './userException/NotFoundUserException';
import { LoginInvalidPasswordException } from './userException/LoginInvalidPasswordException';
import { UserIdAlreadyExistsException } from './userException/UserIdAlreadyExistsException';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly userMapper: UserMapper,
  ) {}

  async registerUCustomer(
    registerUserRequestDto: RegisterUserRequestDto,
  ): Promise<User> {
    const isUserIDExist = await this.userRepository.findOne({
      where: { userid: registerUserRequestDto.userid },
    });
    if (isUserIDExist) {
      throw new UserIdAlreadyExistsException();
    }

    // Directly assign the password without encryption
    const newUserEntity = this.userMapper.DtoToEntity(registerUserRequestDto);
    return await this.userRepository.save(newUserEntity);
  }

  async loginCustomer(
    loginUserDto: LoginUserDto,
  ): Promise<UserLoginResponseDto> {
    // 유저 유효성 체크
    const user = await this.userRepository.findOne({
      where: { userid: loginUserDto.userid },
    });
    if (!user) {
      throw new NotFoundUserException();
    }
    // 로그인 체크 (Directly compare the plain text passwords)
    if (user && loginUserDto.password === user.password) {
      const response: UserLoginResponseDto = {
        userid: user.id,
      };
      return response;
    } else {
      throw new LoginInvalidPasswordException();
    }
  }
}
