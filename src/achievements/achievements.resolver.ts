import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AchievementsService } from './achievements.service';
import { Achievement } from './types/achievement.type';
import { CreateAchievementInput } from './inputs/create-achievement.input';

@Resolver()
export class AchievementsResolver {
  constructor(private readonly achievementsService: AchievementsService
  ) { }

  @Mutation(() => Achievement, { name: 'createAchievement' })
  createAchievement(@Args('input') input: CreateAchievementInput) {
    return this.achievementsService.createAchievement(input)
  }
}

