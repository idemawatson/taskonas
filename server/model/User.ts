import * as db from '../db'
import { ObjectId } from 'mongodb'

const getUser = async (payload: { name: string; email: string; id?: ObjectId }) => {
  return await db.collections.user.findOne(payload)
}

export default {
  getUser,
}
