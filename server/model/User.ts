import * as db from '../db'
import { ObjectId } from 'mongodb'

const getUser = async (payload: { email: string; password: string; id?: ObjectId }) => {
  return await db.collections.user.findOne(payload)
}

export default {
  getUser,
}
