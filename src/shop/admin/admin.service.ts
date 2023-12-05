import { Injectable } from '@nestjs/common';
import { AdminLoginRequestDto } from './dto/admin-login-request.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminService {
  private readonly adminUsername: string;
  private readonly adminPassword: string;

  constructor(private configService: ConfigService) {
    this.adminUsername = this.configService.get<string>('ADMIN_USERNAME');
    this.adminPassword = this.configService.get<string>('ADMIN_PASSWORD');
  }

  async validateAdminLogin(
    adminLoginRequestDto: AdminLoginRequestDto,
  ): Promise<boolean> {
    return (
      adminLoginRequestDto.AdminId === this.adminUsername &&
      adminLoginRequestDto.password === this.adminPassword
    );
  }
}
