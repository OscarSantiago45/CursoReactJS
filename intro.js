const containerElement= document.getElementById("container");
/* //creando y renderizando un elemento con js puro
const headerElement= document.createElement("h1");

headerElement.textContent="Curso de React- Js Puro";
containerElement.appendChild(headerElement); */

//creando y renderizando un elemento con React
const headerElement2= React.createElement("h1",{
    children: "Curso de React - React"
});

ReactDOM.render(headerElement2,containerElement);