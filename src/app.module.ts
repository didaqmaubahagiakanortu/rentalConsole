import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalModule } from './rental/rental.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RentalModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
