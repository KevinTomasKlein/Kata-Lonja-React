function FormularioPeso(): any {
  function devolverCiudadConMasBeneficio(event: any) {
    event.preventDefault();
    const pesoVieiras: number = event.target.elements.vieirasInput.value;
    const pesoPulpo: number = event.target.elements.pulpoInput.value;
    const pesoCentollos: number = event.target.elements.centollosInput.value;

    let Madrid: number;
    let Barcelona: number;
    let Lisboa: number;

    interface Ciudad {
      nombresCiudades: string[];
      tipoAlimentos: string[];
      precioAlimentos: number[][];
      distanciaCiudad: number[];
    }

    const ciudades: Ciudad = {
      nombresCiudades: ["Madrid", "Barcelona", "Lisboa"],
      tipoAlimentos: ["Vieiras", "Pulpo", "Centollos"],
      precioAlimentos: [
        [500, 0, 450],
        [450, 120, 0],
        [600, 100, 500],
      ],
      distanciaCiudad: [800, 1100, 600],
    };

    for (let i: number = 0; i < ciudades.nombresCiudades.length; i++) {
      let precioPorCiudad: any;

      switch (ciudades.nombresCiudades[i]) {
        case "Madrid":
          precioPorCiudad = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            pesoVieiras,
            ciudades.precioAlimentos[i][1],
            pesoPulpo,
            ciudades.precioAlimentos[i][2],
            pesoCentollos
          );
          Madrid = calcularCiudadConDesprecioCarga(
            precioPorCiudad,
            ciudades.distanciaCiudad[i]
          );
          break;
        case "Barcelona":
          precioPorCiudad = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            pesoVieiras,
            ciudades.precioAlimentos[i][1],
            pesoPulpo,
            ciudades.precioAlimentos[i][2],
            pesoCentollos
          );
          Barcelona = calcularCiudadConDesprecioCarga(
            precioPorCiudad,
            ciudades.distanciaCiudad[i]
          );
          break;
        case "Lisboa":
          precioPorCiudad = calcularCiudad(
            ciudades.precioAlimentos[i][0],
            pesoVieiras,
            ciudades.precioAlimentos[i][1],
            pesoPulpo,
            ciudades.precioAlimentos[i][2],
            pesoCentollos
          );
          Lisboa = calcularCiudadConDesprecioCarga(
            precioPorCiudad,
            ciudades.distanciaCiudad[i]
          );
          break;
      }
    }

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
