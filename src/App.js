import react,{useState,useEffect} from 'react';
import Edit from './components/Edit';

function App() {


  var name = "nadia";
  var lastname = "Parra";
  //var contador = 0;
  const [contador,setContador]=useState(0);

  const [username, setUsername] = useState('');

  //const [charmander, setCharmander] = useState({});


  //function aumentar(contador){
  //  contador ++;
   // console.log(contador);
  //}

  function saludar(){
    alert('hola');
  }

  const [autores, setAutores] = useState({});

  useEffect(() => {
    fetch('http://localhost/data/autores.php')
    .then((response) =>{
      return response.json();
    })
    .then((autores) =>{
      setAutores(autores);
    })
  },[]);

  fetch('http://localhost/data/autores.php')
  .then((response) => {
    return response.json();
  })
  .then((autores) => {
    setAutores(autores);
  }, []);







  //function getCharmander(){
    //fetch("http://localhost/data/autores.php")
    //.then((response) => response.json())  
    //.then((char) => {
      //setCharmander(char);
   // });
  //}




  return (
    <>
    <h1>hola {name} {lastname}</h1>
    {/* <button onClick={()=>{

      setContador(contador+1);
      //aumentar(contador);
    }} > aumentar </button> */}
    {/* <p>{contador}</p> */}
    {/* <br /> */}

    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <input name="username" onChange={(e) => {
            setUsername(e.target.value);
          }}/>

        </div>  
        <div className="col-6">
            <Edit  saludar={saludar} username={username} />
        </div>  
      </div>  
    </div>
    
    

    <br />
    <br />


    <div>
      <p>Llamar a pokeApi y charmander</p>
      <button
        onClick={() => {
          getCharmander();
        }}
      >
        Solicitar datos charmander
      </button>
    </div>
    
    <br />
    <br />
    
    <div>
      {/* <></> */}

      { charmander && charmander.sprites && charmander.sprites.front_default ? 
        (
          <img src={charmander.sprites.front_default ? charmander.sprites.front_default : ''  } alt="" />
        )
        : (
          <p>Apreta el boton.</p>
        )
      }


    
    </div>




    </>
  );
}

export default App;
