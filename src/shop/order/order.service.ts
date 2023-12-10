import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../customer/entity/customer.entity';
import { Product } from '../product/entity/product.entity';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<any> {
    const customer = await this.customerRepository.findOne({
      where: { id: createOrderDto.customerId },
    });
    const product = await this.productRepository.findOne({
      where: { id: createOrderDto.productId },
    });

    if (!customer || !product) {
      throw new NotFoundException('Customer or Product not found');
    }

    const order = this.orderRepository.create({
      customer: customer,
      product: product,
      productName: product.name,
      productPrice: product.price,
      orderDate: new Date(),
      status: 'Processing',
    });

    await this.orderRepository.save(order);

    // 주문 완료 시 반환할 정보
    return {
      orderId: order.id,
      customer: {
        nickname: customer.nickname,
        address: customer.address,
        paymentCard: customer.paymentCard,
        accountNumber: customer.accountNumber,
      },
      product: {
        name: product.name,
        price: product.price,
      },
    };
  }

  // 주문 전체 조회
  async findAllOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }
}
