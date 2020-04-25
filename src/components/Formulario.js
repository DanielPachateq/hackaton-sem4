import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({crearRegistro}) => {

    // Crear State de Registro
    const [registro, actualizarRegistro] = useState({
        nombre: '',
        correo: '',
        fecha: '',
        telefono: ''        
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarRegistro({
            ...registro,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { nombre, correo, fecha, telefono } = registro;

    // Cuando el usuario presiona agregar registro
    const submitRegistro = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '' || correo.trim() === ''  || fecha.trim() === ''  || telefono.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        registro.id = 1;

        // Crear Registro
        crearRegistro(registro);
        
        // Crear formulario
        actualizarRegistro({
            nombre: '',
            correo: '',
            fecha: '',
            telefono: ''            
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Registro</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

            <form
                onSubmit={submitRegistro}
            >
                <label>Nombres</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombres"
                    onChange={actualizarState}
                    value={nombre}
                />

                <label>Correo</label>
                <input 
                    type="text"
                    name="correo"
                    className="u-full-width"
                    placeholder="Correo electronico"
                    onChange={actualizarState}
                    value={correo}
                />

                <label>Fecha Nac.</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Telefono</label>
                <input 
                    type="text"
                    name="telefono"
                    className="u-full-width"
                    placeholder="Telefono"
                    onChange={actualizarState}
                    value={telefono}
                />

                <button
                    type="submit"
                    className="u-full-width boton"
                >Enviar</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearRegistro: PropTypes.func.isRequired
}
 
export default Formulario;