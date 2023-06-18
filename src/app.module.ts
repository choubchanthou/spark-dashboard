import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.local', '.env'],
    isGlobal: true,
    load: [databaseConfig],
  }),
  MongooseModule.forRoot(process.env.DATABASE_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
