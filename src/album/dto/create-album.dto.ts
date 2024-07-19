import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  title: string;

  @IsString()
  releaseDate: string;

  @IsArray()
  @IsString({ each: true })
  musics: string[];

  @IsNumber()
  artistId: number;
}
