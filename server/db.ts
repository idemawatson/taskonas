import mongoose from 'mongoose'
import { Logger } from 'log4js'

const MONGODB_URI = 'mongodb://taskonas:mongo@localhost:27017/taskonas?authSource=admin'

export default function connectDB(logger: Logger) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection
  db.on('error', () => logger.error('DB connection error:'))
  db.once('open', () => logger.info('DB connection successful'))
}
