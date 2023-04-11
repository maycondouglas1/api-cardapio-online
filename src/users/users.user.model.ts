import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true,
    regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, minlength: 6 })
  password: string;

  toJSON() {
    return {
      email: this.email,
      name: this.name,
      password: this.password,
    };
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
