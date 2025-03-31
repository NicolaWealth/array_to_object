export const arrayToObject = (arr?: string[]) => {
  const rec: Record<string, boolean> = {};
  if (arr) {
    for (const entry of arr) { rec[entry] = true; }
  }
  return rec;
};

