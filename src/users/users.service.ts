import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(email: string, name: string, password: string): Promise<User> {
    const createdUser = new this.userModel({ email, name, password });
    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async findByPayload(payload: any): Promise<User | undefined> {
    const { email } = payload;
    return this.findOneByEmail(email);
  }
}
