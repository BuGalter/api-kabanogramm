import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Валидация происходит только по объявленым ключам, ругается если чего то не хватает,
// лишние можно, решается добавление в настройки валидации whitelist:true main.ts
export class CreateUserDto {
  @ApiProperty({ description: 'User name', nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ description: 'User email', nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'User password', nullable: false })
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  readonly password: string;

  @ApiProperty({ description: 'User age', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty({ description: 'User life status', nullable: true })
  @Length(0, 10)
  @IsString()
  readonly status: string;

  @ApiProperty({ description: 'Info about user', nullable: true })
  @Length(0, 50)
  @IsString()
  readonly about: string;
}
