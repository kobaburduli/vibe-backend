import { IsArray, IsString, IsUrl } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsArray()
  @IsUrl({}, { each: true })
  musics: string[];

  @IsString()
  biography: string;
}
