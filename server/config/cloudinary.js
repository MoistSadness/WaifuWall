import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

// .env files will not be detected unless dotenv is configured to look in a lower directory
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

export default { cloudinary }

/*
// configuring multer-storage-cloudinary here
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "WaifuWall",
    allowedFormats: ["jpeg", "png"],
  }
})

export default {cloudinary, storage}
*/
