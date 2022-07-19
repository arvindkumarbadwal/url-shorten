import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateUrlShortenDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    longUrl: string;
}