import React from 'react'
import { Header } from '../../Header/Header'

export const Education = () => {
  return (
   <>
   <Header/>

   <div className='body-content'>
        <div className="text-cxntxnt">
       <h1>¡Mi Educación!</h1>
          <p>
          Siendo un Técnico en Software y futuro Tecnólogo con una sólida formación y pasión por el desarrollo de software. <br /> 
          A lo largo de mi carrera, he adquirido experiencia en el manejo de tecnologías clave como Java, PHP y JavaScript, <br /> 
           las cuales utilizo para crear aplicaciones robustas, escalables y eficientes. Además, tengo un manejo profundo <br /> 
           de bases de datos como MySQL y PostgreSQL  lo que me permite garantizar el rendimiento y la integridad
            de los datos en mis proyectos. <br /> 

Mi formación me ha proporcionado un enfoque sólido en las mejores prácticas de desarrollo, enseñándome a escribir código limpio, <br /> 
 modular y fácil de mantener. A lo largo de mis estudios y experiencia, he aprendido a enfrentar desafíos técnicos y a optimizar <br /> 
  procesos, siempre con la meta de mejorar la calidad del software y maximizar su rendimiento. <br /> 
</p> 
        </div>
        <img  className="photx" src="./src/assets/imgs/png-clipart-graduation-cap-removebg-preview (1).png" alt="IMG-1" />
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
