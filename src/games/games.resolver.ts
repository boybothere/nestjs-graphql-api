import { Args, Int, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Query } from '@nestjs/graphql';
import { Game } from './types/game.type';
import { Achievement } from 'src/achievements/types/achievement.type';
import { AchievementsService } from 'src/achievements/achievements.service';
import { AchievementArgs } from 'src/achievements/args/achievements.args';

@Resolver(() => Game)
export class GamesResolver {
  constructor(private readonly gamesService: GamesService,
    private readonly achievementsService: AchievementsService
  ) { }

  @Query(() => [Game], { name: 'games' })
  getGames(@Args('take', { type: () => Int }) take?: number,
    @Args('skip', { type: () => Int }) skip?: number) {
    return this.gamesService.getGames(take, skip)
  }

  @Query(() => Game, { name: 'game' })
  getGameById(@Args('id', { type: () => Int }) id: number) {
    return this.gamesService.getGameById(id)
  }

  @ResolveField(() => [Achievement])
  achievement(@Parent() game: Game,
    @Args() args: AchievementArgs) {
    return this.achievementsService.getAchievementsByGameId(game.id, args);
  }
}
