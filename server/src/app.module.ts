import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entity/content.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Content]),
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        autoLoadEntities: true,
        synchronize: true,
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'kiyo',
        database: 'content-share',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
