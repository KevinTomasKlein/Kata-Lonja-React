import React from "react";


function FormularioPeso() :any{
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("pesos enviados");
    <FuncionesForm />
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