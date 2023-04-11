import { Types } from 'mongoose';

export interface CategoryType {
  id: Types.ObjectId;
  parent: CategoryType | null;
  name: string;
}
