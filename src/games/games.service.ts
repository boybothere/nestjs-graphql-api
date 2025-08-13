import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
    constructor(private readonly prisma: PrismaService) { }
    async getGames() {
        const ns = await this.prisma.game.findMany({
            include: {
                achievement: true
            }
        })
        console.log(ns)
        return ns
    }
}
