const FunctionalComponent= ({children})=>{
    const [count,setCount]= React.useState(0);

    const handleAdd= ()=>{
        setCount(count+1);
    }

    React.useEffect(() => {
        console.log("Comp. funcional - Renderizando con dep. vacia");
      },[]);

    React.useEffect(() => {
        console.log("Comp.Funcional Con dependencia");
    },[count]);

    React.useEffect(()=>{
        return()=>{
            console.log("Comp. Funcional -Desmontanto el Component");
        }
    }
    )

    return(
        <>
        <h4>{children}</h4>
        <div>Contador {count}</div>
        <button onClick={handleAdd}>Agregar</button>
        </>
    );
};

class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }

    handleAdd=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    componentDidMount(){
        console.log("Componente de classe - Renderizando despues de montar el componente")
    }

    componentDidUpdate(){
        console.log("Componente de classe - Renderizando despues de actualizar el componente")
    }  

    componentWillUnmount(){
        console.log("Componente de classe - Desmontando el componente")
    }

    render(){
        return(
            <>
            <h4>{this.props.children}</h4>
            <div>Contador {this.state.count}</div>
            <button onClick={this.handleAdd}>Agregar</button>
            </>
        )
    }
}


const App= ()=>{

    const [visible,setVisible]= React.useState(true);

    const handleToggle=()=>{
        setVisible(!visible);
    }

    return (
        <>
            <h1>Componente funcional Vs. Componente de classe</h1>
            <button onClick={handleToggle}>Toggle</button>
            <hr/>
            {
        visible ? 
        <>
        <FunctionalComponent>Componente Funcional"</FunctionalComponent>
        <ClassComponent>Componente de Classe</ClassComponent>
        </>
        :null
    }
            
        </>
    );
};

ReactDOM.render(<App/>, document.getElementById('container'));