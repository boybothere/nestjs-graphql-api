import { Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from './types/game.type';

@Resolver()
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) { }

  @Query(() => [Game], { name: 'games' })
  getGames() {
    return this.gamesService.getGames()
  }
}
