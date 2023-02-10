/**
 * Processes Knack "scenes" found in "versions" from application schema
 * @constructor
 * @param {Array} sceneList - List of scenes pulled from JSON data
 * @returns {object} - Object containing de-duped "scenes" and a new view total
 */
export const processScenes = (sceneList, isDebug = false) => {
  const reducedScenes = [...new Map(sceneList.map(v => [v.key, v])).values()];
  if (isDebug) {
    console.log('SCENES =>  Before: ' + sceneList.length + ' After: ' + reducedScenes.length);
  }
  const processedObjectList = [];
  let viewTotal = 0;
  reducedScenes.forEach(obj => {
    const views = obj?.views || [];
    const reducedViews = [...new Map(views.map(v => [v.key, v])).values()];
    if (isDebug) {
      console.log('  VIEWS => Before: ' + views.length + ' After: ' + reducedViews.length);
    }
    processedObjectList.push({
      ...obj,
      views: reducedViews
    });
    viewTotal = viewTotal + reducedViews.length;
  });

  return {
    sceneList: processedObjectList,
    viewTotal
  };
};

export default processScenes;
