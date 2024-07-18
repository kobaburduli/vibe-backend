import { IsArray, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString({each: true})
    @IsArray()
    musics: string[];

    @IsString()
    biography: string;
}
