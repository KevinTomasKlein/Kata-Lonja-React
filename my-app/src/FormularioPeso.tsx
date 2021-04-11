import { Ciudad } from "./Interfaces/Ciudad";
import {
  calcularBeneficio,
  calcularBeneficioFinal,
} from "./Utilidades/FuncionesCalculo";

function FormularioPeso(): any {
  function devolverCiudadConMasBeneficio(event: any) {
    event.preventDefault();
    const PESO_VIEIRAS: number = parseFloat(
      event.target.elements.vieirasInput.value
    );
    const PESO_PULPOS: number = parseFloat(
      event.target.elements.pulpoInput.value
    );
    const PESO_CENTOLLOS: number = parseFloat(
      event.target.elements.centollosInput.value
    );

    const CIUDADES: Ciudad = {
      nombresCiudades: ["Madrid", "Barcelona", "Lisboa"],
      tipoAlimentos: ["Vieiras", "Pulpo", "Centollos"],
      precioAlimentos: [
        [500, 0, 450],
        [450, 120, 0],
        [600, 100, 500],
      ],
      distanciaCiudad: [800, 1100, 600],
    };

    let Madrid: number;
    let Barcelona: number;
    let Lisboa: number;

    for (let i: number = 0; i < CIUDADES.nombresCiudades.length; i++) {
      let precioPorCiudad: any;
      CIUDADES.precioAlimentos.forEach((preciosAlimentos) => {
        preciosAlimentos.forEach((precio) => {
          switch (CIUDADES.nombresCiudades[i]) {
            case "Madrid":
              precioPorCiudad = calcularBeneficio(
                CIUDADES.precioAlimentos[i][precio],
                PESO_VIEIRAS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_PULPOS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_CENTOLLOS
              );
              Madrid = calcularBeneficioFinal(
                precioPorCiudad,
                CIUDADES.distanciaCiudad[i]
              );
              break;
            case "Barcelona":
              precioPorCiudad = calcularBeneficio(
                CIUDADES.precioAlimentos[i][precio],
                PESO_VIEIRAS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_PULPOS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_CENTOLLOS
              );
              Barcelona = calcularBeneficioFinal(
                precioPorCiudad,
                CIUDADES.distanciaCiudad[i]
              );
              break;
            case "Lisboa":
              precioPorCiudad = calcularBeneficio(
                CIUDADES.precioAlimentos[i][precio],
                PESO_VIEIRAS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_PULPOS,
                CIUDADES.precioAlimentos[i][precio],
                PESO_CENTOLLOS
              );
              Lisboa = calcularBeneficioFinal(
                precioPorCiudad,
                CIUDADES.distanciaCiudad[i]
              );
              break;
          }
        });
      });
    }

    function ciudadConMayorBeneficio() {
      return Madrid > Barcelona && Madrid > Lisboa
        ? alert("En Madrid se obtendrían más beneficios")
        : Barcelona > Lisboa
        ? alert("En Barcelona se obtendrían más beneficios")
        : alert("En Lisboa se obtendrían más beneficios");
    }
    ciudadConMayorBeneficio();
  }

  return (
    <form onSubmit={devolverCiudadConMasBeneficio}>
      <fieldset>
        <label htmlFor="vieirasInput">Vieiras:</label>
        <input type="number" id="vieirasInput"></input>

        <label htmlFor="pulpoInput">Pulpo:</label>
        <input type="number" id="pulpoInput"></input>

        <label htmlFor="centollosInput">Centollos:</label>
        <input type="number" id="centollosInput"></input>

        <input type="submit" value="enviar" />
      </fieldset>
    </form>
  );
}

export default FormularioPeso;
