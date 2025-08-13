import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AchievementArgs } from './args/achievements.args';
import { CreateAchievementInput } from './inputs/create-achievement.input';
import { Args } from '@nestjs/graphql';
import { UserInputError } from '@nestjs/apollo';

@Injectable()
export class AchievementsService {
    constructor(private readonly prisma: PrismaService) { }
    async getAchievementsByGameId(gameId: number, args: AchievementArgs) {
        const achievements = await this.prisma.achievement.findMany({
            where: {
                gameId,
                ...(args.difficulty && {
                    difficulty: args.difficulty
                })
            },
            skip: args.skip,
            take: args.take
        })

        if (!achievements) return []
        return achievements
    }

    async createAchievement(@Args('input') input: CreateAchievementInput) {
        const { gameId, ...details } = input
        const game = await this.prisma.game.findUnique({
            where: { id: gameId }
        })
        if (!game) throw new UserInputError("Game not found!")
        return await this.prisma.achievement.create({
            data: {
                title: details.title,
                description: details.description,
                points: details.points,
                difficulty: details.difficulty,
                gameId: gameId
            }
        })
    }
}
