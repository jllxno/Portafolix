import React from 'react'
import { Header } from '../../Header/Header'
import { Carousel } from '../../Layouts/Carousel/Carousel'

export const Skills = () => {
  return (
    <>
    
     <Header/>
    
       <div className='body-content'>
            <div className="text-contxnt">
           <h1>¡Mis Skills!</h1>
              <p>Soy un desarrollador con experiencia en varias tecnologías que me permiten abordar desafíos complejos de manera eficiente.
                 Tengo un sólido dominio de Java, PHP y JavaScript, lenguajes que utilizo para construir aplicaciones robustas y escalables.
                  Me especializo en el desarrollo tanto del backend como del frontend, utilizando frameworks como Spring y Node.js para el
                   backend, y React para la creación de interfaces de usuario dinámicas y funcionales. Además, aplico principios
                    de programación orientada a objetos y patrones de diseño para escribir código limpio y mantenible. Estoy siempre 
                    aprendiendo nuevas herramientas y tecnologías para seguir creciendo como profesional y ofrecer soluciones 
                    innovadoras en cada proyecto.
                     ¡Explora mis habilidades y descubre cómo puedo ayudarte a crear soluciones digitales de alta calidad!</p> 
            </div>
           <Carousel/>
            
          </div>
    
          <div className='social medias'>
          <a href="https://www.instagram.com/juan.llxno?igsh=MWtsYnlpa2pzaXl4eg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src=" ./src/assets/imgs/instagram-logo-24.png" alt="Instagram" />
          </a>
         
          <a href="https://www.facebook.com/share/18kkZB5MZa/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/imgs/facebook-circle-logo-24.png" alt="Facebook" />
          </a>
          <a href="https://github.com/jllxno" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/imgs/github-logo-24.png" alt="GitHub" />
          </a>
        </div>
    </>
  )
}
