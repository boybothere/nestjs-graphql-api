import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GamesResolver, GamesService],
})
export class GamesModule { }
