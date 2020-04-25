import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Registro from './components/Registro';

function App() {

  // Registros en local storage
  let registrosIniciales = JSON.parse(localStorage.getItem('registros'));
  if(!registrosIniciales) {
    registrosIniciales = [];
  }

  // Arreglo de registros
  const [registros, guardarRegistros] = useState(registrosIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      let registrosIniciales = JSON.parse(localStorage.getItem('registros'));

      if(registrosIniciales) {
        localStorage.setItem('registros', JSON.stringify(registros))
      } else {
        localStorage.setItem('registros', JSON.stringify([]));
      }
  }, [registros] );

  // Función que toma los registros actuales y agregue una nueva
  const crearRegistro = registro => {
    guardarRegistros([ ...registros, registro ]);
  }

  // Función que elimina un registro por su id
  const eliminarRegistro = id => {
     const nuevosRegistros = registros.filter(registro => registro.id !== id );
     guardarRegistros(nuevosRegistros);
  }

  // Mensaje condicional
  const titulo = registros.length === 0 ? '' : 'Gracias por registrar tus datos';

  return (
    <Fragment>
      <h1>Administrador de Datos</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearRegistro={crearRegistro}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {registros.map(registro => (
                <Registro
                  key={registro.id}
                  registro={registro}
                  eliminarRegistro={eliminarRegistro}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;