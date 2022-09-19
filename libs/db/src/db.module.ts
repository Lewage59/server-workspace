import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // 自定义
      password: 'root123', // 自定义
      database: 'server_workspace',
      entities: [],
      synchronize: false, // 同步数据库数据
      charset: 'utf8mb4', // 设置chatset编码为utf8mb4
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
