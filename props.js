const CustomInput = ({label,placeholder}) => {
  return (
    <div style={{marginBottom: "3%"}}>
      <label htmlFor="name">{label}</label>
      <input id="name" type="text" placeholder={placeholder}></input>
    </div>
  );
};
//pasando parametros como hijos
const FormTitle=({children})=>{
    return <h1>{children}</h1>
}
//************ */
const CustomForm = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <form action="">
          <FormTitle>
              <span style={{color:"green"}}>Formulario</span>
          </FormTitle>
          <CustomInput label="Nombre" placeholder="Digite su Nombre"/>
          <CustomInput label="Edad" placeholder="Digite su Edad"/>
      </form>
    </div>
  );
};

ReactDOM.render(<CustomForm />, document.getElementById("container"));
