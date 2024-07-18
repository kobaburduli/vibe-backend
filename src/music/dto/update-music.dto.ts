import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicDto } from './create-music.dto';
import { IsOptional, IsString } from 'class-validator';


export class UpdateMusicDto extends PartialType(CreateMusicDto) {}
