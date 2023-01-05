export function getPath() {
  let path: string;
  if (typeof window !== "undefined") {
    path = window.location.pathname;
    return path;
  }
}
export function formatMoney(value: number | bigint) {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}
