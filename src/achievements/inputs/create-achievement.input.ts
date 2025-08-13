import { Field, InputType, Int } from "@nestjs/graphql";
import { Difficulty } from "../enums/difficulty.enum";

@InputType()
export class CreateAchievementInput {
    @Field()
    title: string

    @Field()
    description: string

    @Field(() => Int)
    points: number

    @Field(() => Difficulty)
    difficulty: Difficulty

    @Field(() => Int)
    gameId: number
}