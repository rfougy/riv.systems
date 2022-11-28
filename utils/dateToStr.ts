export function dateToStr(date: Date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
