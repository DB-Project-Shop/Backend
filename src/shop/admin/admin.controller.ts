import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginRequestDto } from './dto/admin-login-request.dto';
import { Response } from 'express';

@Controller('shop/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/login')
  async loginAdmin(
    @Body() adminLoginRequestDto: AdminLoginRequestDto,
    @Res() res: Response,
  ): Promise<void> {
    const isValid =
      await this.adminService.validateAdminLogin(adminLoginRequestDto);

    if (isValid) {
      res.status(HttpStatus.OK).json({ message: 'Admin login successful' });
    } else {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }
  }
}
