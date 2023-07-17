export function sortInAlphabeticOrder(a: string, b: string): number {
  const textA: string = a.toLowerCase();
  const textB: string = b.toLowerCase();
  return textA > textB ? -1 : 1;
}
