import { Field, ObjectType } from "@nestjs/graphql";
import { Achievement } from "src/achievements/types/achievement.type";

@ObjectType()
export class Game {
    @Field()
    id: string

    @Field()
    name: string

    @Field({ nullable: true })
    genre: string

    @Field(() => [Achievement])
    achievement: Achievement[]
}