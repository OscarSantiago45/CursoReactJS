const CustomTitle = ({ children }) => {

    React.useEffect(()=>{
        return()=>{
            console.log("Desmontanto el Component del titulo");
        }
    }
    )
  return <h3>{children}</h3>;
};

const LifeCycle = () => {
  const [visible, setVisible] = React.useState(true);
  const handleShowTitle = () => {
    setVisible(!visible);
  };

  React.useEffect(() => {
    console.log("Sin dependencias");
  });
  React.useEffect(() => {
    console.log("Con dependencia Vacia");
  },[]);
  React.useEffect(() => {
    console.log("Con dependencia");
  },[visible]);

  return (
    <>
      {visible ? <CustomTitle>lifeCycle-useEffect</CustomTitle> : null}

      <button onClick={handleShowTitle}>Show title</button>
    </>
  );
};

ReactDOM.render(<LifeCycle />, document.getElementById("container"));
