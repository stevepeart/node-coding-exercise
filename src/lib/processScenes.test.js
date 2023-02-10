import processScenes from './processScenes';
import { testScenes } from '../../__mocks__/testScenes';

test('Works as expected', () => {
  expect(processScenes(testScenes)).toBeTruthy();
});

test('Works as expected (debug mode)', () => {
  expect(processScenes(testScenes, true)).toBeTruthy();
});

test('Works as expected (no views)', () => {
  const newTestObjects = testScenes.map(obj => {
    let omit = obj;
    delete omit.views;
    return omit;
  });
  expect(processScenes(newTestObjects)).toBeTruthy();
});
