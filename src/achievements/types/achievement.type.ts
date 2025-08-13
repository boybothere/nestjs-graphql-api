import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Difficulty } from "../enums/difficulty.enum";

@ObjectType()
export class Achievement {
    @Field()
    id: string

    @Field()
    title: string

    @Field()
    description: string

    @Field(() => Int)
    points: number

    @Field(() => Difficulty)
    difficulty: Difficulty

}