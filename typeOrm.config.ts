// import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';
// import { DataSource } from 'typeorm';
// import { User } from './src/shop/user/entity/user.entity';
// config();

// const configService = new ConfigService();

// export default new DataSource({
//   type: 'mysql',
//   host: configService.get('MIGRATION_HOST'),
//   port: +configService.get('DB_PORT'),
//   username: configService.get('DB_USER'),
//   password: configService.get('DB_PASSWORD'),
//   database: configService.get('DB_NAME'),
//   entities: [User],
// });
