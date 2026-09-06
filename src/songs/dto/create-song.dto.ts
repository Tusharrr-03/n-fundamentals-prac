import { IsArray, IsNotEmpty, IsNumber, IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'; // if you need nested validation

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    readonly title!: string;

    @IsNotEmpty()
    @IsArray()
    readonly artist!: string[];

    @IsArray()
    @IsNotEmpty({ each: true })
    readonly album?: string[];

    @IsNumber()
    @IsNotEmpty()
    readonly year?: number;
}