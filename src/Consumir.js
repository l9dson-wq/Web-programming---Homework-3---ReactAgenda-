import React, {useEffect, useState} from "react";
import './Consumir.css'

// Tengo un argumento URL que me servira para pasar la API
export default function Consumir({URL}){
    
    const [todos, setTodos] = useState();
  
    const fetchApi = async () => {
      const response = await fetch(URL);
  
      const responseJSON = await response.json();
      setTodos(responseJSON);
    }
    // ejecutamos esto desde el inicio
    useEffect(() => {
      fetchApi();
    }, [])
  
    return (
        <div className="App">
          <ul className='myTable'>
              {/* si la lista esta vacia mostrara el mensaje de cargando hasta que la lista tenga datos */}
            { !todos ? 'Cargando....' : 
            // cuando la lista tenga datos esta sera mapeada
            todos.map((todos,index)=>{
              return(
                <table className="myTable">
                    <tr className="filaTable">
                        <th className="ths">Nombre</th>
                        <th className="ths">Apellido</th>
                        <th className="ths">Telefono</th>
                    </tr>

                    <tbody>
                        <tr className="filaFill">
                            <td className="tds">${todos.nombre}</td>
                            <td className="tds">${todos.apellido}</td>
                            <td className="tds">${todos.telefono}</td>
                        </tr>
                    </tbody>
                </table>
              );
            })}
          </ul>
        </div>
      );
}