import mongoose from 'mongoose';
import { IPerson } from '../interfaces';

const { Schema } = mongoose;

const personSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter your first name'
  },
  lastName: {
    type: String,
    required: 'Enter last name'
  },
  email: {
    type: String
  }
});

export const PersonModel = mongoose.model<IPerson>('User', personSchema);
