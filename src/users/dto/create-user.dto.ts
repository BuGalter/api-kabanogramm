import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// лишние можно отсекает добавление в настройки валидации whitelist:true main.ts
export class CreateUserDto {
  @ApiProperty({ description: 'User name', nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ description: 'User email', nullable: false })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
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

  @ApiProperty({
    description: 'User life status',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  readonly status: string;

  @ApiProperty({
    description: 'Info about user',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly about: string;
}
