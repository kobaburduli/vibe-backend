import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MusicModule } from 'src/music/music.module';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [MusicModule],
})
export class SearchModule {}
