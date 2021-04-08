import React from "react";


function FormularioPeso() :any{
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("pesos enviados");
    const vieiras: number = event.target.elements.vieirasInput.value;
    const pulpo: number = event.target.elements.pulpoInput.value;
    const centollos: number = event.target.elements.centollosInput.value;

    interface Ciudad {
      nombres: string[];
      tipoAlimentos: string[];
      precioAlimentos: number[][];
      distanciaCiudad: number[];
    }

    const ciudades: Ciudad = {
      nombres: ["Madrid", "Barcelona", "Lisboa"],
      tipoAlimentos: ["Vieiras", "Pulpo", "Centollos"],
      precioAlimentos: [
        [500, 0, 450],
        [450, 120, 0],
        [600, 100, 500],
      ],
      distanciaCiudad: [800, 1100, 600],
    };

    function calcularCiudad(
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

    function calcularCiudadConDesprecioCarga(
      precioPorCiudad: number,
      distanciaCiudad: number
    ): number {
      let desprecioPorTransporte = 1 - (0.01 * distanciaCiudad) / 100;
      let precioCargarFurgoneta = 5 + 2 * distanciaCiudad;
      return precioPorCiudad * desprecioPorTransporte - precioCargarFurgoneta;
    }

    let Madrid: number;
    let Barcelona: number;
    let Lisboa: number;

    for (let i: number = 0; i < ciudades.nombres.length; i++) {
      let precioPorCiudadX: any;
      var datos: number;

      switch (ciudades.nombres[i]) {
        case "Madrid":
          precioPorCiudadX = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            vieiras,
            ciudades.precioAlimentos[i][1],
            pulpo,
            ciudades.precioAlimentos[i][2],
            centollos
          );
          Madrid = calcularCiudadConDesprecioCarga(
            precioPorCiudadX,
            ciudades.distanciaCiudad[i]
          );
          break;
        case "Barcelona":
          precioPorCiudadX = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            vieiras,
            ciudades.precioAlimentos[i][1],
            pulpo,
            ciudades.precioAlimentos[i][2],
            centollos
          );
          Barcelona = calcularCiudadConDesprecioCarga(
            precioPorCiudadX,
            ciudades.distanciaCiudad[i]
          );
          break;
        case "Lisboa":
          precioPorCiudadX = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            vieiras,
            ciudades.precioAlimentos[i][1],
            pulpo,
            ciudades.precioAlimentos[i][2],
            centollos
          );
          Lisboa = calcularCiudadConDesprecioCarga(
            precioPorCiudadX,
            ciudades.distanciaCiudad[i]
          );
          break;
      }
    }

    function menorPrecioCiudad() {
      return Madrid > Barcelona && Madrid > Lisboa
        ? alert("En Madrid se obtendrían más beneficios")
        : Barcelona > Lisboa
        ? alert("En Barcelona se obtendrían más beneficios")
        : alert("En Lisboa se obtendrían más beneficios");
    }
    menorPrecioCiudad();
  }

  return (
    <form onSubmit={handleSubmit}>
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