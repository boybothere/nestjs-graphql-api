import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GamesModule } from './games/games.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma/prisma.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    autoSchemaFile: 'src/schema.gql',
    plugins: [ApolloServerPluginLandingPageLocalDefault()]
  }), GamesModule, PrismaModule, AchievementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
