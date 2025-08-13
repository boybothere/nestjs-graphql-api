import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Achievement } from "src/achievements/types/achievement.type";

@ObjectType()
export class Game {
    @Field(() => ID)
    id: number

    @Field()
    name: string

    @Field({ nullable: true })
    genre: string

    @Field(() => [Achievement])
    achievement: Achievement[]
}