import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AchievementsService {
    constructor(private readonly prisma: PrismaService) { }
    async getAchievementsByGameId(gameId: number) {
        return await this.prisma.achievement.findMany({
            where: { gameId }
        })
    }
}
