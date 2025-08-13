import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Difficulty } from "../enums/difficulty.enum";

@ArgsType()
export class PaginationArgs {
    @Field(() => Int)
    skip: number

    @Field(() => Int)
    take: number
}

@ArgsType()
export class AchievementArgs extends PaginationArgs {

    @Field(() => Difficulty, { nullable: true })
    difficulty: Difficulty
}