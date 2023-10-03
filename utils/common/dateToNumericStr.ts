export function dateToNumericStr(date: string): string {
  const dateFormatted = new Date(date.replace(/-/g, "/"))
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .replace(/\//g, ".");

  const dateWithDoubleDigits = dateFormatted
    .split(".")
    .map((num: string): string => (num.length === 1 ? "0" + num : num))
    .join(".");

  return dateWithDoubleDigits;
}
