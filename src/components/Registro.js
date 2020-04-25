import React from 'react';
import PropTypes from 'prop-types';


const Registro = ({registro, eliminarRegistro}) => ( 
    <div className="registro">
        <p>Nombres: <span>{registro.nombre}</span> </p>
        <p>Correo: <span>{registro.correo}</span> </p>
        <p>Fecha Nac.: <span>{registro.fecha}</span> </p>
        <p>Telefono: <span>{registro.telefono}</span> </p>        

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarRegistro(registro.id)  }
        >Salir &times;</button>
    </div>
);

Registro.propTypes = {
    registro: PropTypes.object.isRequired,
    eliminarRegistro: PropTypes.func.isRequired
}
 
export default Registro;