import { ConnectionOptions } from 'mongoose'

const {
  MONGO_ROOTNAME = 'root',
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_HOST = 'localhost',
  MONGO_PORT = 27017,
  MONGO_DATABASE = 'auth'
} = process.env

//export const MONGO_URI = `mongodb://root:secret@localhost:27017/auth?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`

export const MONGO_URI = `mongodb://${MONGO_ROOTNAME}:${
  encodeURIComponent(MONGO_PASSWORD)
}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?${MONGO_DATABASE}Source=${MONGO_USERNAME}`

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
