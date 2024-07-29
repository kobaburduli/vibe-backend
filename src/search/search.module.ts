import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MusicModule } from 'src/music/music.module';
import { AuthorModule } from 'src/author/author.module';
import { AlbumModule } from 'src/album/album.module';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [MusicModule, AuthorModule, AlbumModule],
})
export class SearchModule {}
