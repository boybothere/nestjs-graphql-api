import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AchievementsModule } from 'src/achievements/achievements.module';

@Module({
  imports: [PrismaModule, AchievementsModule],
  providers: [GamesResolver, GamesService],
})
export class GamesModule { }
