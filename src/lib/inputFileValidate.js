import * as fs from 'fs';

export const inputFileValidate = filename => {
  if (!fs.existsSync(filename)) {
    console.log('<input_filename> Could not be found');
    return false;
  }

  return true;
};

export default inputFileValidate;
