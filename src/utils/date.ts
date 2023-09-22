export const dateLong = (date: string) =>
  new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
