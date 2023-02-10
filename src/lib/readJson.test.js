import readJson from './readJson';

test('Works as expected', () => {
  expect(readJson('__mocks__/sample.json')).toBeTruthy();
  expect(readJson('__mocks__/sample.json')).toMatchObject({ data: 'something' });
});