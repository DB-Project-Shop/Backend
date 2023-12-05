import { HttpStatus } from '@nestjs/common';
import { CustomException } from '../../../global/exception/customException';
import { ErrorCode } from '../../../global/exception/errorCode/Errorcode';

export class UserIdAlreadyExistsException extends CustomException {
  constructor() {
    super(
      ErrorCode.USER_ID_ALREADY_EXIST,
      '이미 존재하는 아이디가 있습니다!',
      HttpStatus.CONFLICT,
    );
  }
}
