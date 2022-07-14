import React, { useState, useEffect } from "react";

function Listado() {
  // hook de estado para guardar el autor clickeado en la tabla.
  const [autor, setAutor] = useState({});

  const [autores, setAutores] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch("http://localhost:8088/data/autores.php")
      .then((response) => {
        return response.json()
      })
      .then((autores) => {
        // setProducts(response.result);
        console.log(autores);
        setAutores(autores);
      })
      .catch((err) => console.error(err.message));
  };

//   }, [autor]);

  // Funcion que renderiza las obras de un autor dentro del modal.
  const renderObras = (obras, index) => {
    obras.map((o) => <h5 key={index}>{o}</h5>);
  };

  return (
    <>
      <h1>Componente listado</h1>

      <div className="contenedor" style={{ border: "3px solid black" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Pseudonimo</th>
              <th scope="col">Nacionalidad</th>
              <th scope="col">Obras</th>
            </tr>
          </thead>
          <tbody>
            {autores.map((a) => (
              <tr>
                <th>{a.id}</th>
                <td>{a.nombre}</td>
                <td>{a.pseudonimo}</td>
                <td>{a.nacionalidad}</td>
                <td>
                  <button
                    onClick={() => setAutor(a)}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                  <p>{autor.nombre}</p>
                  <ul>
                    {autor.obras.map((o) => (
                      <li>{o}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                onClick={() => setAutor({})}
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
export default Listado;
