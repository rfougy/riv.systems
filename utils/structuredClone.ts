export function structuredClone(objectToClone: any) {
  const stringified = JSON.stringify(objectToClone);
  const parsed = JSON.parse(stringified);
  return parsed;
}
