import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class ChatsService {
  create(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }

  createGroup(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group chat';
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
