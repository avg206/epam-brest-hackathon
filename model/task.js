import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const Task = new Schema({
  category: String,
  assigne: String,
  creator: String,
  title: String,
  text: String,
  time: String,
  state: Number,
  comment: String,
});

export default mongoose.model('Task', Task);
