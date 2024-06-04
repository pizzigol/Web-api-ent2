import React from 'react'
import Menu from '../Componentes/Menu'
import Footer from '../Componentes/Footer'
import TiposAlojamiento from '../Componentes/TipoAlojamiento'
import Alojamientos from '../Componentes/Alojamientos'




export default  function Administracion(){
    return (
        <div>
           <Menu/>
           <body>  
        <div className="contenedor-alojamientos">
            
           <h2 className='textoalojamientos'>Administración de Alojamientos</h2>
             
            <TiposAlojamiento/> 
            <Alojamientos/> 
        
        </div>      
        </body>    
        <Footer/>
          
        </div>
    )
}
