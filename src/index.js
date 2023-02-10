import usage from './lib/usage';
import inputFileValidate from './lib/inputFileValidate';
import readJson from './lib/readJson';
import writeJson from './lib/writeJson';
import processObjects from './lib/processObjects';
import processScenes from './lib/processScenes';

// Not clear from the instructions about what makes an entry "duplicate", this is based on assumption for now
// Also not clear which duplicate ultimately should be kept,
// possibly based on other values to determine precedence, assumed for now that it is not important

const args = process.argv;

// First two args are reserved, gotta check there's at least 4
if (args.length < 4) {
  usage();
  process.exit(1);
}

// Figure out command line args (quick and dirty version)
const filteredArgs = args.filter(arg => arg !== '--debug');
const isDebug = args.indexOf('--debug') > -1;
const inputFilename = filteredArgs[2];
const outputFilename = filteredArgs[3];

// Check that the input file name is a valid usable file
if (!inputFileValidate(inputFilename)) {
  process.exit(1);
}

// Parse and return JSON data into JS object
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

// Iterate over versions, and pull out objects and scenes for processing
versions.forEach(version => {
  const objects = version?.objects || [];
  const scenes = version?.scenes || [];
  const dedupedObjects = processObjects(objects, isDebug);
  const dedupedScenes = processScenes(scenes, isDebug);

  // Processed items get added
  newVersions.push({
    ...version,
    objects: dedupedObjects.objList,
    scenes: dedupedScenes.sceneList
  });

  // Collecting totals for the various total fields at the top-level
  totalObjects = totalObjects + dedupedObjects.objList.length;
  totalScenes = totalScenes + dedupedScenes.sceneList.length;
  totalFields = totalFields + dedupedObjects.fieldTotal;
  totalViews = totalViews + dedupedScenes.viewTotal;
});

// Adding final data totals to output before writing to file
finalOutput.versions = newVersions;
finalOutput.object_count = totalObjects;
finalOutput.scene_count = totalScenes;
finalOutput.field_count = totalFields;
finalOutput.view_count = totalViews;

if (isDebug) {
  console.log('Writing to file: ' + outputFilename);
}

// Writing the JSON output file
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

// Exit cleanly
process.exit(0);
