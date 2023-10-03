export function formatAndStylizeDate(date: string): string {
  const dateFormatted = dateToLocalString(date);
  const stylizedDate = stylizeDate(dateFormatted);

  return stylizedDate;
}

function dateToLocalString(date: string): string {
  return new Date(date.replace(/-/g, "/")).toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

/**
 * @example input = "1/1/2023", output = "01.01.23"
 */
function stylizeDate(date: string): string {
  return date
    .split("/")
    .map((val: string): string => stylizeDateVal(val))
    .join("/")
    .replace(/\//g, ".");
}

function stylizeDateVal(val: string): string {
  const isSingleDigitMonth = val.length === 1;
  const isYear = val.length === 4;

  return isSingleDigitMonth ? "0" + val : isYear ? val.substring(2) : val;
}
