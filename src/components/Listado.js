import React, { useState, useEffect } from "react";

function Listado() {
  // hook de estado para guardar el autor clickeado en la tabla.
  const [autor, setAutor] = useState({});

  // hook de efecto que revisa cuando se cambia el estado de autor.
  useEffect(() => {
    if (autor) {
      console.log(autor.obras);
    }
  }, [autor]);

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

  // Funcion que renderiza las obras de un autor dentro del modal.
  const renderObras = (obras, index) => {
    obras.map((o) => <h5 key={index}>{o}</h5>);
  };

  return (
    <>
      <h1>Componente listado</h1>

      <div className="contenedor" style={{ border: "3px solid black" }}>
        <table class="table">
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
                    class="btn btn-primary"
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

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button
                onClick={() => setAutor({})}
                type="button"
                class="btn btn-secondary"
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
