import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ description: 'User email', nullable: false })
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'User password', nullable: false })
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  readonly password: string;
}
