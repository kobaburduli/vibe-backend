import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from '../entities/album.entity';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';

@Injectable()
export class AlbumRepository {
  constructor(
    @InjectRepository(Album)
    private albumrepository: Repository<Album>,
  ) {}

  create(createAlbumDto: CreateAlbumDto) {
    
    return this.albumrepository
    .createQueryBuilder('album')
    .insert()
    .into(Album)
    .values(createAlbumDto)
    .execute()
    }

  findAll(){
    return this.albumrepository
    .createQueryBuilder('album')
    .getMany()
  }

  findOne(id: number){
    return this.albumrepository
    .createQueryBuilder('album')
    .where('album.id = :id', {id})
    .getOne(); 
    
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto){
    return this.albumrepository
    .createQueryBuilder('album')
    .update(Album)
    .set(updateAlbumDto)
    .where('album.id = :id', {id})
    .execute()
  }

  remove(id: number){
    return this.albumrepository
    .createQueryBuilder('album')
    .delete()
    .from(Album)
    .where('album.id = :id', {id})
    .execute()
  }
}
