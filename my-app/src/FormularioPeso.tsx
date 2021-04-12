import { Ciudad } from "./Interfaces/Ciudad";
import {
  calcularBeneficio,
  calcularBeneficioFinal,
} from "./Utilidades/FuncionesCalculo";

import "bootstrap/dist/css/bootstrap.css";
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
      if (Madrid > Barcelona && Madrid > Lisboa) {
        alert("En Madrid se obtendrían más beneficios");
        event.target.resultado.value = "Madrid";
      } else if (Barcelona > Lisboa) {
        alert("En Barcelona se obtendrían más beneficios");
        event.target.resultado.value = "Barcelona";
      } else {
        alert("En Lisboa se obtendrían más beneficios");
        event.target.resultado.value = "Lisboa";
      }
    }
    ciudadConMayorBeneficio();
  }

  return (
    <div className="container row g-3 m-0 m-auto ">
      <div className="col-md-12">
        <form onSubmit={devolverCiudadConMasBeneficio} className="form ">
          <legend>KATA-LONJA-REACT</legend>
          <fieldset className="p-3 d-inline-flex">
            <div className="col-md-6">
              <label htmlFor="vieirasInput" className="form-label">
                Vieiras:
              </label>
              <input
                type="number"
                id="vieirasInput"
                className="form-control"
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="pulpoInput" className="form-label">
                Pulpo:
              </label>
              <input
                type="number"
                id="pulpoInput"
                className="form-control"
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="centollosInput" className="form-label">
                Centollos:
              </label>
              <input
                type="number"
                id="centollosInput"
                className="form-control"
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="resultado" className="form-label mt-1">
                Resultado:
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Ciudad con mayor beneficio..."
                aria-label="ciudad con mayor beneficio..."
                readOnly
                id="resultado"
              ></input>
            </div>
            <div className="col-md-6 ">
              <label htmlFor="btnEnviar" className="form-label"></label>
              <input
                type="submit"
                value="Enviar"
                id="btnEnviar"
                className="form-control"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FormularioPeso;
