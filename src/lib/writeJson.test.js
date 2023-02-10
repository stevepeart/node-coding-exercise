import * as fs from 'fs';
import writeJson from './writeJson';

jest.mock('fs');

test('Works as expected', () => {
  expect(writeJson('somefile.json', { data: 'test' })).toBeTruthy();
});

test('Throws when write fails', () => {
  fs.writeFileSync.mockImplementation(() => { throw new Error('something'); });
  expect(writeJson('somefile.json', 'test')).toBe(false);
});