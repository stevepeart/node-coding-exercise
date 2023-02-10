import * as fs from 'fs';

export const writeJson = (filename, jsonData) => {
  try {
    fs.writeFileSync(filename, JSON.stringify(jsonData));
    return true;
  } catch (e) {
    return false;
  }
};

export default writeJson;
