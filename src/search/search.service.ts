import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { MusicRepository } from 'src/music/repositories/music.repository';

@Injectable()
export class SearchService {
  
  constructor(private readonly musicRepo: MusicRepository){}

  
  search(search: string){
    return this.musicRepo.findByName(search)
  }

}
