

describe('arrayToObject', () => {
  it('basics', () => {
    const p: { in?: string[], out: Record<string, boolean> }[] = [
      {in: undefined, out: {}},
      {in: [], out: {}},
      {in: ['a'], out: {a: true}},
      {in: ['abc'], out: {abc: true}},
      {in: ['abc', 'def', 'ghi'], out: {abc: true, def: true, ghi: true}},
    ];
    console.log(p);
  });
});
