import processObjects from './processObjects';
import { testObjects } from '../../__mocks__/testObjects';

test('Works as expected', () => {
  expect(processObjects(testObjects)).toBeTruthy();
});

test('Works as expected (debug mode)', () => {
  expect(processObjects(testObjects, true)).toBeTruthy();
});

test('Works as expected (no fields)', () => {
  const newTestObjects = testObjects.map(obj => {
    let omit = obj;
    delete omit.fields;
    return omit;
  });
  expect(processObjects(newTestObjects)).toBeTruthy();
});
