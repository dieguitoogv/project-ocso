import { IsEmail, IsOptional, IsString, IsUUID, MinLength } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsString()
    @IsUUID('4')
    @IsOptional()
    declare userId: string;
    @IsEmail()
    declare userEmail: string;
    @IsString()
    @MinLength(8)
    declare userPassword: string;
}