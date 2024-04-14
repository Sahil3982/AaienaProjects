import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
