import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  epamID: String,
});

export default mongoose.model('User', User);
