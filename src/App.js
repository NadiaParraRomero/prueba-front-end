import react,{useState,useEffect} from 'react';
import Edit from './components/Edit';
import Header from './components/common/header';
import Main from './components/Main';
import Listado from './components/Listado';
import Buscar from './components/Buscar';


import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // const [autores, setAutores] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost/data/autores.php')
  //   .then((response) =>{
  //     return response.json();
  //   })
  //   .then((autores) =>{
  //     setAutores(autores);
  //   })
  // },[]);
  
  // fetch('http://localhost/data/autores.php')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((autores) => {
  //   setAutores(autores);
  // }, []);


  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Main />}/>
        <Route path="/buscar" exact element={<Buscar />}/>
        <Route path="/listar" exact element={<Listado />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
