import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../../../customer/entity/customer.entity';
import { Order } from '../../entity/order.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @ManyToOne(() => Order)
  order: Order;

  @Column()
  rating: number;

  @Column()
  content: string;
}
