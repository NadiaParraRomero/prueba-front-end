import React, { useState, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

function Buscar() {
  // Hoook de estado para el arreglo de autores. guarda resultado de la peticion fetch
  const [autores, setAutores] = useState([]);

  // hook de estado para valor de busqueda. ingreso usuario
  const [idAutor, setIdAutor] = useState(0);

  // hook de estado para guardar el autor encontrado. cuando la funcion encuentra, se guarda aqui 
  const [autor, setAutor] = useState(null);

  useEffect(() => {
    if (autores.length != 0) {
      console.log("HAY CAMVBIOS!!!!");
    }
  }, [autores]);

  useEffect(() => {
    fetchData();
  },[])


  const fetchData = async () => {
    await fetch("http://localhost:8088/data/autores.php")
      .then((response) => {
        return response.json()
      })
      .then((autores) => {
        console.log(autores);
        setAutores(autores);
      })
      .catch((err) => console.error(err.message));
  };

  function buscar() {
    if (idAutor === 0 || idAutor === undefined || idAutor === null) {
      alert("Debe ingresar un valor de busqueda");
    } else {
      if (!autores || autores.length === 0) {
        alert(`No hay autores para buscar`);
      } else {
        // buscar autor 
        autores.map((a) => {
          if (a.id === idAutor) {
            setAutor(a);
          }
        });
      }
    }
  }

  return (
    <>
      <h1>Componente Buscar</h1>

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
          <button
            onClick={buscar}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            buscar
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {autor && autor.nombre ? (
                <>
                  <p>Nombre: {autor.nombre}</p>
                  <p>Pseudonimo: {autor.pseudonimo}</p>
                  <p>Nacionalidad: {autor.nacionalidad}</p>
                  <ul> 
                    <p>Obras</p>
                    {autor.obras.map((o) => (
                      <li>{o}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>NO SE ECONTRO AUTOR!</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                onClick={() => setAutor(null)}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Buscar;
