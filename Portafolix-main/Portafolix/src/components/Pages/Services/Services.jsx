import React from 'react'
import { Header } from '../../Header/Header'

export const Services = () => {
  return (
   <>
   <Header/>

   <div className='body-content'>
        <div className="text-contxnt">
       <h1>¡Mis Servicios!</h1>
          <p>Como desarrollador de software, ofrezco una amplia gama de servicios enfocados en crear soluciones tecnológicas <br />
             a medida que resuelvan tus desafíos. Me especializo en el desarrollo de aplicaciones web y móviles utilizando <br />
             tecnologías como Java, PHP y JavaScript, asegurando siempre que cada proyecto esté optimizado para un rendimiento <br />
              excepcional. Trabajo con un enfoque en la calidad del código y la escalabilidad, aplicando las mejores prácticas <br />
               de desarrollo para garantizar soluciones eficientes, fáciles de mantener y con una excelente experiencia de usuario. <br />
                Ya sea que necesites una nueva aplicación, una optimización de procesos o una solución personalizada, estoy aquí <br />
                para ayudarte a transformar tus ideas en resultados tangibles y efectivos. <br />
                ¡Contáctame y juntos llevaremos tu proyecto al siguiente nivel!</p> 
        </div>
        <img  className="photx" src="./src/assets/imgs/png-transparent-spanners-tool-leaning-orange-logo-spanners-removebg-preview__1_-removebg-preview.png" alt="IMG-1" />
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
