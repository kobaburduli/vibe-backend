import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './repositories/music.repository';

@Injectable()
export class MusicService {

  constructor(private readonly musicReposiotry: MusicRepository){}

  async create(createMusicDto: CreateMusicDto) {
    return await this.musicReposiotry.create(createMusicDto);
  }

  async findAll() {
    return await this.musicReposiotry.findAll();
  }

  async findOne(id: number) {
    return await this.musicReposiotry.findOne(id);
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    return await this.musicReposiotry.update(id, UpdateMusicDto);
  }

  async remove(id: number) {
    return await this.musicReposiotry.remove(id);
  }
}
