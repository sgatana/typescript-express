import { Document } from 'mongoose';

export class IPerson extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}
