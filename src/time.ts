export const toLocalTime = (value: string | number | Date) =>
  new Date(value).toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });
