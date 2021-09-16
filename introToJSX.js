const videoNumber = () => {
  return 3;
};

const headerElement2 = (
  <div>
    <h1 id="1" style={{ color: "blue" }}>
      Curso de React {videoNumber()}{" "}
    </h1>
  </div>
);

ReactDOM.render(headerElement2, document.getElementById("container"));
