import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AchievementArgs } from './args/achievements.args';

@Injectable()
export class AchievementsService {
    constructor(private readonly prisma: PrismaService) { }
    async getAchievementsByGameId(gameId: number, args: AchievementArgs) {
        return await this.prisma.achievement.findMany({
            where: {
                gameId,
                ...(args.difficulty && {
                    difficulty: args.difficulty
                })
            },
            skip: args.skip,
            take: args.take
        })
    }
}
