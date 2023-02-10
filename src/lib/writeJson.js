import * as fs from 'fs';

/**
 * Writes a JSON file from a JS Object
 * @constructor
 * @param {string} filename - JSON File path we wish to write data to
 * @returns {boolean} - Whether the process was successful or not
 */
export const writeJson = (filename, jsonData) => {
  try {
    fs.writeFileSync(filename, JSON.stringify(jsonData));
    return true;
  } catch (e) {
    return false;
  }
};

export default writeJson;
