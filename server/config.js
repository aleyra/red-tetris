import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir_path = path.join(__dirname, process.env.DIRNAME || '../front/build');
const file_path = path.join(dir_path, process.env.FILENAME || 'index.html');

const config = {
  PORT: process.env.PORT || 8000,
  DIR_PATH: dir_path,
  FILE_PATH: file_path
};

export default config;