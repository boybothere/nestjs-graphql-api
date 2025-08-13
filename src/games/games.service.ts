import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameInput } from './inputs/create-game.input';
import { UserInputError } from '@nestjs/apollo';

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
        const game = await this.prisma.game.findUnique({
            where: {
                id: gameId
            }
        })
        if (!game) throw new UserInputError("Game not found!")
        return game
    }

    async createGame(input: CreateGameInput) {
        return await this.prisma.game.create({
            data: {
                name: input.name,
                genre: input.genre
            }
        })
    }

}
