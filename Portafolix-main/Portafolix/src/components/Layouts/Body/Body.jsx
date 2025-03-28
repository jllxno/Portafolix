import React from 'react'

export const Body = () => {
  return (
    <>
      <div className='body-content'>
        <div className="text-content">
          <h1>¡Bienvenido a mi portafolio!</h1>
          <p>Soy Juan, desarrollador de software con experiencia en Java, <br />
             PHP y JavaScript. Me especializo en crear soluciones eficientes y escalables,<br />
             aplicando las mejores prácticas de desarrollo para garantizar código limpio y funcional. <br />
             En mi portafolio, encontrarás proyectos que reflejan mi capacidad para <br />
             construir aplicaciones robustas y optimizar procesos. <br />
             ¡Explora mi trabajo y descubre cómo puedo aportar valor a tu próximo proyecto!</p>
        </div>
        <img  className="photo" src="./src/assets/imgs/IMG_3041.webp" alt="IMG-1" />
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
