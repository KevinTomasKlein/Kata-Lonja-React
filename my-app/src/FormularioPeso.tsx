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
    const CARGA_MAX_FURGONETA: number = 200;
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
    // @ts-ignore: Object is possibly 'null'.
    function ciudadConMayorBeneficio() {
      if (Madrid > Barcelona && Madrid > Lisboa) {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("texto").innerHTML = "Madrid";
      } else if (Barcelona > Lisboa) {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("texto").innerHTML = "Barcelona";
      } else {
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("texto").innerHTML = "Lisboa";
      }
    }
    if (PESO_VIEIRAS <= 0 || PESO_PULPOS <= 0 || PESO_CENTOLLOS <= 0) {
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById("texto").innerHTML =
        "El valor no puede ser negativo !!!!!";
    } else if (
      isNaN(PESO_VIEIRAS) ||
      isNaN(PESO_PULPOS) ||
      isNaN(PESO_CENTOLLOS)
    ) {
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById("texto").innerHTML =
        "El valor no puede ser nulo!!!!!";
    } else if (
      PESO_CENTOLLOS + PESO_PULPOS + PESO_VIEIRAS >
      CARGA_MAX_FURGONETA
    ) {
      // @ts-ignore: Object is possibly 'null'.
      document.getElementById("texto").innerHTML =
        "La suma del pescado a cargar no puede superar los 200Kg!";
    } else {
      ciudadConMayorBeneficio();
    }
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
            <div className="col-md-6 mt-2">
              <label htmlFor="btnEnviar" className="form-label"></label>
              <input
                type="submit"
                value="Enviar"
                id="btnEnviar"
                className="form-control"
              />
            </div>
            <div className="col-md-12 mt-5">
              <p
                className="text-uppercase font-weight-bold text-info bg-light"
                id="texto"
              ></p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FormularioPeso;
