import { Schema, model } from 'mongoose'

const Task = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  deadline: { type: String },
  user: { type: 'ObjectId', ref: 'User', index: true },
})

export default model('task', Task)
