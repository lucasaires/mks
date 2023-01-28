export function convertToReal(value: number): number {
  const real = value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
  return Number(real);
}

export function convertToRealWithInsignia(value: number): string {
  const real = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return real;
}
