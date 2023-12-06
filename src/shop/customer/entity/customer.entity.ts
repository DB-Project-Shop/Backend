import { BaseEntity } from '../../../global/common/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  CustomerId: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  paymentCard: string;

  @Column({ nullable: true })
  accountNumber: string;
}
