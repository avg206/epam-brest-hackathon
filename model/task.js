import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const Task = new Schema({
  category: String,
  assigne: String,
  creater: String,
  task: String,
  time: String,
  state: String,
});

export default mongoose.model('Task', Task);
