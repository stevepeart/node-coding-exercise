import * as fs from 'fs';

export const readJson = jsonFile => {
  const rawdata = fs.readFileSync(jsonFile);
  const jsonData = JSON.parse(rawdata);
  return jsonData;
};

export default readJson;
