import multer from 'multer';
import path  from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(res, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName); // no lugar dp null, geralmente eh um err, pra retornar um erro se houver
    }
  }),
};