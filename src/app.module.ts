import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BugModule } from './bug/bug.module';

@Module({
  imports: [BugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
