import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { MusicRepository } from 'src/music/repositories/music.repository';
import { AuthorRepository } from 'src/author/repositories/author.repository';
import { AlbumRepository } from 'src/album/repositories/album.repository';

@Injectable()
export class SearchService {
  
  constructor(private readonly musicRepo: MusicRepository,
              private readonly authorRepo: AuthorRepository,
              private readonly albumRepo: AlbumRepository
  ){}

  
  async search(search: string){

    const music = await this.musicRepo.findByName(search)
    const author = await this.authorRepo.findByName(search)
    const album = await this.albumRepo.findByName(search)

    return { music, author, album}
  }

}