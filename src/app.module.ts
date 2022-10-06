import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db-config';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: dbConfig().type,
      host: dbConfig().host,
      port: dbConfig().port,
      username: dbConfig().username,
      password: dbConfig().password,
      database: dbConfig().database,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
  ],
})
export class AppModule {}
