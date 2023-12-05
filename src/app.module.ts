import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './shop/customer/customer.module';
import { MysqlModule } from './config/mysql/mysql.module';

@Module({
  imports: [CustomerModule, MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
