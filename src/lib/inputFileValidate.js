import * as fs from 'fs';

/**
 * Validates an input file
 * @constructor
 * @param {string} filename - File path we want to check.
 * @returns {boolean} - Whether the check has passed
 */
export const inputFileValidate = filename => {
  if (!fs.existsSync(filename)) {
    console.log('<input_filename> Could not be found');
    return false;
  }

  return true;
};

export default inputFileValidate;
