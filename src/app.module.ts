import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [AuthModule, TopPageModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
