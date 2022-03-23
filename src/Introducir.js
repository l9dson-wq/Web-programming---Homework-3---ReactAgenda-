import React from "react";


export default function Introducir({URL, primerDato, segundoDato, tercerDato}){

    var datos = {
        nombre: primerDato,
        apellido: segundoDato,
        telefono: tercerDato
    } 
    fetch(URL,{
        method: 'POST',
        body: JSON.stringify(datos)
    });

    return(
        <>
            <p>{datos.nombre}</p>
        </>
    );
}