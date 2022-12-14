export function capitalizeFirstChar(str: string): string {
  return str
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
}
