import multer from "multer";
import DatauriParser from 'datauri/parser.js'
import path from 'path'

// multer.memoryStorage() sets multer to save images to memory instead of local storage
const storage = multer.memoryStorage()
// Set the storage option to memory storage and to target form data with field 'selectedFile'
const singleImageUpload = multer({ storage }).single('selectedFile')

const parser = new DatauriParser();

/*
    Since the file is being stored in memory as a buffer, it needs to be converted to a string
    so the cloudinary uploader will understand what it is
 */
function dataUri(req) {
    parser.format(path.extname(req.file.originalname).toString, req.file.buffer)
}

export {singleImageUpload, dataUri}




