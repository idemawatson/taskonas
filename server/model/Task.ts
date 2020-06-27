import { Schema, model } from 'mongoose'

const Task = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  user: { type: 'ObjectId', ref: 'User' },
})

export default model('task', Task)
