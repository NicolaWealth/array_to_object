export const arrayToObject = (p?: string[]) => {
  const r: Record<string, boolean> = {};
  if (p) {
    for (const e of p) { r[e] = true; }
  }
  return r;
};

