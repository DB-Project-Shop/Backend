import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminLoginRequestDto } from './dto/admin-login-request.dto';
import { CreateProductDto } from '../product/dto/create-product.dto';
import { ProductService } from '../product/product.service';

@Controller('shop/admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly productService: ProductService) {}

  @Post('/login')
  async loginAdmin(@Body() adminLoginRequestDto: AdminLoginRequestDto) {
    const isValid = await this.adminService.validateAdminLogin(adminLoginRequestDto);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { message: 'Admin login successful' };
  }

  @Post('/products')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
}
