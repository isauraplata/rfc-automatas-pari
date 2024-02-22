import React, { useState } from "react";
import Swal from 'sweetalert2';
import GraphComponent from "./GraphComp";

function App() {
  const [data, setData] = useState("");
  const [esCorrecto, setEsCorrecto] = useState(false);

  const rfc = ["p", "a", "r", "i"];

  const busqueda = () => {
    let entrada = data.toLowerCase();
  
    const esEntradaCorrecta =
      entrada.length <= 4 &&
      entrada.split("").every((letra) => rfc.includes(letra)) &&
      /^p[^p]*$/.test(entrada);
  
    setEsCorrecto(esEntradaCorrecta);
  
    if (esEntradaCorrecta) {
      console.log("Correcto");
      console.log("La entrada es: " + entrada);
      Swal.fire("¡Expresión válida!");
    } else {
      Swal.fire("Incorrecto NO válida!");
      console.log("Incorrecto");
    };
  };
  

  return (
    <div className="container">
      <div className="form-group">
        <h2>RFC</h2>
        <p className="label">Ingrese el rfc</p>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <br />
        <br />
        <button
          onClick={() => {
            busqueda();
          }}
          className="btn btn-primary"
        >
          Buscar
        </button>
      </div>
      {esCorrecto && <GraphComponent entrada={data} />}
    </div>
  );
}

export default App;
