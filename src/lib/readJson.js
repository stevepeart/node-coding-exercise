import * as fs from 'fs';

/**
 * Reads a JSON file and parses into a JS Object
 * @constructor
 * @param {string} jsonFile - JSON File path we wish to get data from
 * @returns {object} - Parsed JSON object
 */
export const readJson = jsonFile => {
  const rawdata = fs.readFileSync(jsonFile);
  const jsonData = JSON.parse(rawdata);
  return jsonData;
};

export default readJson;
