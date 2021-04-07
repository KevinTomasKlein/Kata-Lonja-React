import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <title>Kata Lonja React</title>
      </header>
      <body>
        <form>
          <fieldset>
            <label htmlFor="vieiras">Vieiras:</label>
            <input id="vieiras"></input>
            <label htmlFor="pulpo">Pulpo:</label>
            <input id="pulpo"></input>
            <label htmlFor="centollos">Centollos:</label>
            <input type="text" id="centollos"></input>
            <input type="button" value="enviar"/>
          </fieldset>
        </form>
      </body>
    </div>
  );
}

export default App;
