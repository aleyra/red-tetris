import path from 'path';
import process from 'process';

const dir_path = path.join(__dirname, process.env.DIRNAME || '../front/build');
const file_path = path.join(dir_path, process.env.FILENAME || 'index.html');

const config = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DIR_PATH: dir_path,
  FILE_PATH: file_path
};

export default config;