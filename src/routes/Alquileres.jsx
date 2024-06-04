import React from 'react'
import Menu from '../Componentes/Menu'
import Footer from '../Componentes/Footer'


export default  function Alquileres(){
    return (
        <div>
           <Menu/>
           
        <body>  
        <div className="contenedor-alojamientos">
            
           <h2 className='textoalojamientos'>Nuestros Alojamientos</h2>
             
            <div className='imagenhoteles'>
            <form action="https://www.turismocity.com.ar/hoteles?msclkid=f0ed8e97966214a6570ee8c9e527b1f9&utm_source=bing&utm_medium=cpc&utm_campaign=TC%20AR%20-%20Hoteles%20-%20Gen%C3%A9rico&utm_term=de%20hoteles&utm_content=Comparador%20de%20Hoteles"target="_blank">
                <button className='botonalquilereres'>Hoteles</button>
            </form>   
            </div>
            <p className='parrafoalquileres'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita similique unde adipisci praesentium. Impedit eos unde rem expedita deserunt aliquam, hic quam veniam, obcaecati non cum laudantium, dicta sapiente.</p>
            
            <div className='imagencabañas'>
            <form action="https://www.cabanias.com.ar/"target="_blank">
                <button className='botonalquilereres'>Cabañas</button>
            </form>      
            </div>
            
            <p className='parrafoalquileres'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum ea voluptatibus blanditiis doloribus ullam vitae, itaque veritatis enim nulla earum incidunt, pariatur laudantium, facilis in ipsum laboriosam ab eaque.</p>
            
            <div className='imagendepartamentos'>
            <form action="https://www.icasas.com.ar/alquiler/departamentos/rosario"target="_blank">
                <button className='botonalquilereres'>Departamentos</button>
                </form> 
            </div>

            <p className='parrafoalquileres'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit earum labore sunt sit ut a molestias natus, deleniti laboriosam provident, quam consequatur atque veritatis libero soluta nemo amet magnam vitae.</p>

            

            
                
                
                
                
               
                
              

        </div>      
        </body>    
        <Footer/>
          
        </div>
    )
}
