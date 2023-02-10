import inputFileValidate from './inputFileValidate';

test('Works as expected', () => {
  expect(inputFileValidate('dist/lib/inputFileValidate.js')).toBe(true);
});

test('Returns false when file not found', () => {
  expect(inputFileValidate('dist/lib/somewrongfile.js')).toBe(false);
});
