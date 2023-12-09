import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Response } from 'express';

@Controller('shop/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @Res() res: Response,
  ) {
    const order = await this.orderService.createOrder(createOrderDto);
    res.status(HttpStatus.CREATED).json(order);
  }
}
