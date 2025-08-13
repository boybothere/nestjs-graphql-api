import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
    constructor(private readonly prisma: PrismaService) { }
    async getGames() {
        return await this.prisma.game.findMany()
    }

    async getAchievementsByGameId(gameId: number) {
        return await this.prisma.achievement.findMany({
            where: { gameId }
        })
    }
}
