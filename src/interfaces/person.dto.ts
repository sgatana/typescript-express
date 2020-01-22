import { Document } from 'mongoose';

export class IPerson extends Document {
  firstName: string;
  lastName: string;
  email: string;
}
