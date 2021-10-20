import React, { useState, useEffect } from "react";

function ShowHide(props) {
    // console.log(props);
  return (
    <div>
      <button onClick={() => props.doneFn()}>
      Show & Hide
      </button>
    </div>
  );
}

export default ShowHide;

/* Ideas para resolverlo:
Se deben mostrar y ocultar con un btn las tareas que estén realizadas,
es decir, aquellas que muestren el done en true:

1. Recibir el array de tareas
Cuando se aprete el btn, debe realizar lo siguiente:
Se debe tener un estado de las vistas actuales del array;
* Filtrar las tareas realizadas
* Mostrar el array de tareas

Este btn deberá estar en el Header
*/
