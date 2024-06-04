import React from 'react';

import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaPrincipal from './routes/PaginaPrincipal';
import QuienesSomos from './routes/QuienesSomos';
import Contactos from './routes/Contactos';
import Alquileres from './routes/Alquileres';
import Error from './routes/Error';
import Administración from './routes/Administracion';

import './Componentes/Menu.css';
import './Componentes/Footer.css';
import './Componentes/Hero.css';
import './Componentes/QuienesSomos.css';
import './Componentes/Formulario.css';
import './Componentes/Alquileres.css';
import './Componentes/Contactos.css';
import './Componentes/Alojamientos.css';
import './Componentes/TipoAlojamiento.css'
import './Componentes/Administracion.css'





const router = createBrowserRouter([
  {
     path: '/',
     element: <PaginaPrincipal/>,
     errorElement:<Error/>
  },
  {
    path: '/quienessomos',
    element: <QuienesSomos/>
 },
 {
  path: '/contactos',
  element: <Contactos/>
},
{
  path: '/alquileres',
  element: <Alquileres/>
},
{
  path: '/administracion',
  element: <Administración/>
},



]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

reportWebVitals();
