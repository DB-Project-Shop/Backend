import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../category/entity/category.entity'; 

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  size: string;

  @Column()
  stock: number;

  @ManyToOne(() => Category, category => category.products)
  category: Category;
}
