import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    //Уникальный емайл, по нему проверка есть ли такой пользователь
    const { username, email, password, age, about, status } = createUserDto;

    const userInDb = await this.userRepository.findOneBy({ email });

    if (userInDb) {
      const error = { email: 'Email must be unique.' };
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Input data validation failed',
          error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    user.age = age;
    user.about = about;
    user.status = status;

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      const error = { id: 'Invalid id.' };
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Input data validation failed',
          error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const updatedUser = Object.assign(user, updateUserDto);

    return await this.userRepository.save(updatedUser);
  }

  login(loginUserDto: LoginUserDto) {
    return {
      message: 'User login!',
      data: loginUserDto,
    };
  }
}
