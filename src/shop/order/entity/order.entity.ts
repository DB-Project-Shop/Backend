import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../../customer/entity/customer.entity';
import { Product } from '../../product/entity/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @Column()
  orderDate: Date;

  @Column()
  status: string;
}
