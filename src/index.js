import usage from './lib/usage.js';
import inputFileValidate from './lib/inputFileValidate.js';
import readJson from './lib/readJson.js';
import writeJson from './lib/writeJson.js';
import processObjects from './lib/processObjects.js';
import processScenes from './lib/processScenes.js';

// Not clear from the instructions about what makes an entry "duplicate", this is based on assumption for now
// Also not clear which duplicate ultimately should be kept,
// possibly based on other values to determine precedence, assumed for now that it is not important

// TODO:
//   ReadMe doc for usage

const args = process.argv;

if (args.length < 4) {
  usage();
  process.exit(1);
}

// Figure out command line args
const filteredArgs = args.filter(arg => arg !== '--debug');
const isDebug = args.indexOf('--debug') > -1;
const inputFilename = filteredArgs[2];
const outputFilename = filteredArgs[3];

if (!inputFileValidate(inputFilename)) {
  process.exit(1);
}

const inputData = readJson(inputFilename);

// Process for potential multiple versions? (Since it's an array)
const versions = inputData?.versions || [];
const finalOutput = {
  ...inputData
};
let totalFields = 0;
let totalViews = 0;
let totalObjects = 0;
let totalScenes = 0;
const newVersions = [];
versions.forEach(version => {
  const objects = version?.objects || [];
  const scenes = version?.scenes || [];
  const dedupedObjects = processObjects(objects, isDebug);
  const dedupedScenes = processScenes(scenes, isDebug);

  newVersions.push({
    ...version,
    objects: dedupedObjects.objList,
    scenes: dedupedScenes.sceneList
  });

  totalObjects = totalObjects + dedupedObjects.objList.length;
  totalScenes = totalScenes + dedupedScenes.sceneList.length;
  totalFields = totalFields + dedupedObjects.fieldTotal;
  totalViews = totalViews + dedupedScenes.viewTotal;
});

finalOutput.versions = newVersions;
finalOutput.object_count = totalObjects;
finalOutput.scene_count = totalScenes;
finalOutput.field_count = totalFields;
finalOutput.view_count = totalViews;

if (isDebug) {
  console.log('Writing to file: ' + outputFilename);
}

if (!writeJson(outputFilename, finalOutput)) {
  process.exit(1);
}

if (isDebug) {
  console.log("\nRESULTS: ");
  console.log("\tTotal Versions: " + finalOutput?.versions.length);
  console.log("\tTotal Objects:  " + totalObjects);
  console.log("\tTotal Fields:   " + totalFields);
  console.log("\tTotal Scenes:   " + totalScenes);
  console.log("\tTotal Views:    " + totalViews);
}

process.exit(0);
