import React, { useState, useEffect } from "react";
import { Route, Redirect, useLocation ,useHistory} from 'react-router-dom';

function Buscar() {
  // Hoook de estado para el arreglo de autores.
  // const [autores, setAutores] = useState([]);

  // hook de estado para valor de busqueda.
  const [idAutor, setIdAutor] = useState(0);

  // hook de estado para guardar el autor encontrado.
  const [autor, setAutor] = useState(null);

  // useEffect(() => {
  //     if(autores.length != 0){
  //         console.log('HAY CAMVBIOS!!!!')
  //     }
  // },[autores]);

  // LISTADO DE PRUEBA PARA DESARROLLO.
  const autores = [
    {
      id: 1,
      nombre: "John Ronald Reuel Tolkien",
      pseudonimo: "JRR Tolkien",
      nacionalidad: "Británica",
      obras: [
        "El Hobbit",
        "El Señor de los Anillos",
        "El Silmarilion",
        "Cuentos inconclusos",
      ],
    },
    {
      id: 2,
      nombre: "Arthur Ignatius Conan Doyle",
      pseudonimo: "Arthur Conan Doyle",
      nacionalidad: "Británica",
      obras: [
        "Estudio en escarlata",
        "El Signo de los cuatro",
        "El sabueso de los Baskerville",
        "El valle del terror",
      ],
    },
    {
      id: 3,
      nombre: `'Oscar Fingal O'Flahertie Wills Wilde'`,
      pseudonimo: "Oscar Wilde",
      nacionalidad: "Británica Irlandesa",
      obras: [
        "El retrato de Dorian Gray",
        "El principe feliz",
        "De profundis",
        "Balada de la cárcel de Reading",
      ],
    },
  ];

  function buscar() {

    const history = useHistory();

    if (idAutor === 0 || idAutor === undefined || idAutor === null) {
      alert("Debe ingresar un valor de busqueda");
    } else {
      if (!autores || autores.length === 0) {
        alert(`No hay autore para buscar`);
      } else {
        // buscar autor en array.
        // en caso de que se encuentra guardarlo en el hook de estado autor o leAutor enviar leAutor por props a Mostrar
        // const autorEncontrado = autores.map((a) => {
        autores.map((a) => {
          if (a.id === parseInt(idAutor)) {
            console.log(a);
            setAutor(a);
          }
        });
        autor ? history.push('/mostrar', {autor: autor}) : alert('No se encontro autor :(');
      }
    }
  }

  return (
    <>
      <h1>Componente Buscar</h1>

      {/* {autor ? (<p>{autor.nombre}</p>) : null} */}

      <div className="card" style={{ width: "fit-content" }}>
        <div className="card-body">
          <p className="card-text">
            <label htmlFor="">Buscar autor por id 1, 2 o 3</label> <br />
            <input
              onChange={(e) => {
                setIdAutor(e.target.value);
              }}
              type="number"
              style={{ marginTop: "15px" }}
            />
          </p>
          <button onClick={buscar} className="btn btn-primary">
            buscar
          </button>
          {idAutor}
        </div>
      </div>
    </>
  );
}
export default Buscar;
