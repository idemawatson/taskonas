import { MongoClient, Collection, ObjectId } from 'mongodb'

const MONGODB_URI = 'mongodb://taskonas:mongo@localhost:27017/taskonas?authSource=admin'

export type User = {
  _id?: ObjectId
  name: string
  email: string
}

export type Task = {
  _id?: ObjectId
  name: string
  status: string
}

export const collections: {
  user: Collection<User>
  task: Collection<Task>
} = {
  user: null,
  task: null,
}

export const connect = async () => {
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = client.db('taskonas')
  collections.user = db.collection<User>('user')
  collections.task = db.collection<Task>('task')
}
