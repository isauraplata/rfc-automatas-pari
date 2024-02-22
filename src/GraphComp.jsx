import React from "react";
import { Graphviz } from 'graphviz-react';

function GraphComponent({ entrada }) {
  const generateDot = (entrada) => {
    // Genera el DOT dinámicamente según el valor de entrada
    const dot = `digraph {
      ${entrada.split("").join(" -> ")}
    }`;
    return dot;
  };

  return <Graphviz dot={generateDot(entrada)} />;
}

export default GraphComponent;
