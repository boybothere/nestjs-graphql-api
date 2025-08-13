import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from './types/game.type';
import { Achievement } from 'src/achievements/types/achievement.type';
import { AchievementsService } from 'src/achievements/achievements.service';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService,
    private readonly achievementsService: AchievementsService
  ) { }

  @Query(() => [Game], { name: 'games' })
  getGames() {
    return this.gamesService.getGames()
  }

  @ResolveField(() => [Achievement])
  achievement(@Parent() game: Game) {
    return this.achievementsService.getAchievementsByGameId(game.id);
  }
}
