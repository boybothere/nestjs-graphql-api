import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsResolver } from './achievements.resolver';

@Module({
  providers: [AchievementsResolver, AchievementsService],
})
export class AchievementsModule {}
