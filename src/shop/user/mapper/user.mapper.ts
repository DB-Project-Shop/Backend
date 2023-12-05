import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { RegisterUserRequestDto } from '../dto/user-register-request.dto';
import { UserResponseDto } from '../dto/user-response.dto';

@Injectable()
export class UserMapper {
  DtoToEntity({ userid, password }: RegisterUserRequestDto): User {
    const user = new User();

    user.userid = userid;
    user.password = password;

    return user;
  }

  EntityToDto(user: User): UserResponseDto {
    return {
      userid: user.userid,
    };
  }
}
