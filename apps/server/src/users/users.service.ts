/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { MySql2Database } from 'drizzle-orm/mysql2'
import * as schema from '../schema'

@Injectable()
export class UsersService {
  constructor(
    @Inject('mysqlConnection') private db: MySql2Database<typeof schema>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findMany() {
    return await this.db.select().from(schema.users)
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
