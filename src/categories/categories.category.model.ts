import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CategoryType } from 'src/types/Category';

export type CategoryDocument = CategoryType & Document;

@Schema()
export class Category {
  @Prop({ type: Types.ObjectId })
  id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  parent: Category;

  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
