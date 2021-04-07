import React from "react";

import "./App.css";

function FormularioPeso() {

  function handleSubmit(event:any) {
    event.preventDefault()
    console.log('pesos enviados');
    const vieiras: number = event.target.elements.vieirasInput.value;
    const pulpo: number = event.target.elements.pulpoInput.value;
    const centollos: number = event.target.elements.centollosInput.value;
    alert(vieiras);
    alert(pulpo);
    alert(centollos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="vieirasInput">Vieiras:</label>
        <input type='number' id="vieirasInput"></input>

        <label htmlFor="pulpoInput">Pulpo:</label>
        <input type='number' id="pulpoInput"></input>

        <label htmlFor="centollosInput">Centollos:</label>
        <input type='number' id="centollosInput"></input>

        <input type="submit" value="enviar" />
      </fieldset>
    </form>
  )
}

function App() {

  return (
    <div className="App">
      <header>
        <title>Kata Lonja React</title>
      </header>
      <FormularioPeso />
    </div>
  );
}

export default App;
