export function dateToStr(date: string): string {
  return new Date(date.replace(/-/g, "/"))
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
}
