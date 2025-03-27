import assert from 'assert';
import {arrayToObject} from './array_to_object';

describe('arrayToObject', () => {
  it('basics', () => {
    const p: { in?: string[], out: Record<string, boolean> }[] = [
      {in: undefined, out: {}},
      {in: [], out: {}},
      {in: ['a'], out: {a: true}},
      {in: ['abc'], out: {abc: true}},
      {in: ['abc', 'def', 'ghi'], out: {abc: true, def: true, ghi: true}},
    ];
    p.forEach(t => {
      assert.deepStrictEqual(arrayToObject(t.in), t.out);
    });
  });
});
