const PRECIO_CARGA_FURGONETA: number = 5;
const PRECIO_KM_RECORRIDO: number = 2;

export function calcularBeneficio(
  cantidadAlimento1: number,
  precio1: number,
  cantidadAlimento2: number,
  precio2: number,
  cantidadAlimento3: number,
  precio3: number
): number {
  return (
    precio1 * cantidadAlimento1 +
    precio2 * cantidadAlimento2 +
    cantidadAlimento3 * precio3
  );
}

export function calcularBeneficioFinal(
  precioPorCiudad: number,
  distanciaCiudad: number
): number {
  let desprecioPorTransporte = 1 - (0.01 * distanciaCiudad) / 100;
  let precioCargarFurgoneta =
    PRECIO_CARGA_FURGONETA + PRECIO_KM_RECORRIDO * distanciaCiudad;
  return precioPorCiudad * desprecioPorTransporte - precioCargarFurgoneta;
}
