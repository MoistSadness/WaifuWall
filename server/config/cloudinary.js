import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from 'dotenv'
dotenv.config({path: path.resolve(__dirname, '../.env')})

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});

console.log('cloudinary key', process.env.CLOUDINARY_KEY)

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "WaifuWall",
    allowedFormats: ["jpeg", "png"],
  }
})

export default {cloudinary, storage}

//export default { cloudinary }