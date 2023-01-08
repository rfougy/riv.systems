export function dateToNumericStr(date: string): string {
  return new Date(date.replace(/-/g, "/"))
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
}
