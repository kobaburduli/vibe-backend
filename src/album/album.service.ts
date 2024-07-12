import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumRepository } from './repositories/album.repository';

@Injectable()
export class AlbumService {

  constructor(private readonly albumrepository: AlbumRepository){}

  create(createAlbumDto: CreateAlbumDto) {
    return this.albumrepository.create(createAlbumDto);
  }

  findAll() {
    return this.albumrepository.findAll();
  }

  findOne(id: number) {
    return this.albumrepository.findOne(id);
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return this.albumrepository.update(id, updateAlbumDto);
  }

  remove(id: number) {
    return this.albumrepository.remove(id);
  }
}
