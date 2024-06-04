import  { useState, useEffect } from 'react';
import api from '../api';

const Alojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({
    Titulo: '',
    Descripcion: '',
    Latitud: '',
    Longitud: '',
    PrecioPorDia: '',
    CantidadDormitorios: '',
    CantidadBanios: '',
    Estado: '',
    TipoAlojamiento: ''
  });

  useEffect(() => {
    fetchAlojamientos();
    fetchTiposAlojamientos();
  }, []);

  const fetchAlojamientos = () => {
    api.get('/alojamiento/getAlojamientos')
      .then(response => {
        setAlojamientos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los alojamientos:', error);
      });
  };

  const fetchTiposAlojamientos = () => {   /*obtenemos tipos de alojamientos*/
    api.get('/tiposAlojamiento/getTiposAlojamiento')
      .then(response => {
        setTiposAlojamiento(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los Tipos de alojamientos:', error);
      });
  };

  const crearAlojamiento = () => {
    api.post('/alojamiento/createAlojamiento', nuevoAlojamiento)
      .then(response => {
        setAlojamientos([...alojamientos, response.data]);
        setNuevoAlojamiento({
          Titulo: '',
          Descripcion: '',
          Latitud: '',
          Longitud: '',
          PrecioPorDia: '',
          CantidadDormitorios: '',
          CantidadBanios: '',
          Estado: '',
          TipoAlojamiento: ''
        });
        alert('Se Pudo Crear el Alojamiento')
        fetchAlojamientos();/*Recarga la lista(promesas)*/
      })
      .catch(error => {
        console.error('Error al crear el alojamiento:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoAlojamiento({ ...nuevoAlojamiento, [name]: value });
  };

  const eliminarAlojamiento = (id) => {
    api.delete(`/alojamiento/deleteAlojamiento/${id}`)
      .then(() => {
        setAlojamientos(alojamientos.filter(alojamiento => alojamiento.idAlojamiento !== id));
        alert('Se Elimino el Alojamiento')
      })
      .catch(error => {
        console.error('Error al eliminar el alojamiento:', error);
        alert('No se Pudo Eliminar')
      });
  };

  return (
    <div className='Alojamientoscomponente'>
      <h1 className='textoalojamiento'>Alojamientos</h1>
      <ul className='listacontenedor'>
        {alojamientos.map(alojamiento => (
          <li className='listaAlojamiento' key={alojamiento.idAlojamiento}>
            {alojamiento.Titulo} - {alojamiento.Estado}
            <button className='botonElimAlojamiento' onClick={() => eliminarAlojamiento(alojamiento.idAlojamiento)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2 className='textoAlojamiento2'>Crear nuevo Alojamiento</h2>
      <input className='titulo' type="text" name="Titulo" value={nuevoAlojamiento.Titulo} onChange={handleInputChange} placeholder="Título" />
      <input type="text" name="Descripcion" value={nuevoAlojamiento.Descripcion} onChange={handleInputChange} placeholder="Descripción" />
      <input type="number" step="0.00000001" name="Latitud" value={nuevoAlojamiento.Latitud} onChange={handleInputChange} placeholder="Latitud" />
      <input type="number" step="0.00000001" name="Longitud" value={nuevoAlojamiento.Longitud} onChange={handleInputChange} placeholder="Longitud" />
      <input type="number" step="0.01" name="PrecioPorDia" value={nuevoAlojamiento.PrecioPorDia} onChange={handleInputChange} placeholder="Precio por día" />
      <input type="number" name="CantidadDormitorios" value={nuevoAlojamiento.CantidadDormitorios} onChange={handleInputChange} placeholder="Dormitorios" />
      <input type="number" name="CantidadBanios" value={nuevoAlojamiento.CantidadBanios} onChange={handleInputChange} placeholder="Baños" />
      <select className='selecestado' name="Estado" value={nuevoAlojamiento.Estado} onChange={handleInputChange}>
        <option value="">Seleccionar Estado</option>
        <option value="Disponible">Disponible</option>
        <option value="Reservado">Reservado</option>
      </select>
      <select className='selecTipoAlojamiento' name="TipoAlojamiento" value={nuevoAlojamiento.TipoAlojamiento} onChange={handleInputChange}>
        <option value="">Seleccionar Tipo de Alojamiento</option>
        {tiposAlojamiento.map(tipo=>(
         <option key={tipo.id} value={tipo.idTipoAlojamiento}>
          {tipo.Descripcion}
         </option>
        ))}

      </select>
      <button className='botonCrearAlojamiento' onClick={crearAlojamiento}>Crear Alojamiento</button>
    </div>
  );
};
      
export default Alojamientos;
