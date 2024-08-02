import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { AuthorModule } from './author/author.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './album/album.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    MusicModule,
    AuthorModule,
    AlbumModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'T599310631t',
      database: 'vibedatabase',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
