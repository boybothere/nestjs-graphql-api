import { Injectable } from '@nestjs/common';
import { AchievementArgs } from 'src/achievements/args/achievements.args';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
    constructor(private readonly prisma: PrismaService) { }
    async getGames(take?: number, skip?: number) {
        return await this.prisma.game.findMany({
            skip: skip ?? 0,
            take: take ?? 3
        })
    }

    async getGameById(gameId: number) {
        return await this.prisma.game.findUnique({
            where: {
                id: gameId
            }
        })
    }

}
