import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  }, 
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profile'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const userModel = model<User & Document>('user', userSchema);

export default userModel;
