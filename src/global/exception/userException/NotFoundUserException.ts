import { HttpStatus } from '@nestjs/common';
import { CustomException } from '../customException';
import { ErrorCode } from '../errorCode/Errorcode';

export class NotFoundUserException extends CustomException {
  constructor() {
    super(
      ErrorCode.USER_NOT_FOUND,
      '사용자를 찾을 수 없습니다!',
      HttpStatus.NOT_FOUND,
    );
  }
}
