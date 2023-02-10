export const processObjects = (objList, isDebug = false) => {
  const reducedObjects = [...new Map(objList.map(v => [v.identifier, v])).values()];
  if (isDebug) {
    console.log('OBJECTS =>  Before: ' + objList.length + ' After: ' + reducedObjects.length);
  }
  const processedObjectList = [];
  let fieldTotal = 0;
  reducedObjects.forEach(obj => {
    const fields = obj?.fields || [];
    const reducedFields = [...new Map(fields.map(v => [v.key, v])).values()];
    if (isDebug) {
      console.log('  FIELDS => Before: ' + fields.length + ' After: ' + reducedFields.length);
    }
    processedObjectList.push({
      ...obj,
      fields: reducedFields
    });
    fieldTotal = fieldTotal + reducedFields.length;
  });

  return {
    objList: processedObjectList,
    fieldTotal
  };
};

export default processObjects;
