import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    title: string;

    @IsString()
    releaseDate: string;

    @IsArray()
    musics: string[];

    @IsNumber()
    artistId: number;
}
