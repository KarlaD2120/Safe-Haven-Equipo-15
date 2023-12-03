import React from 'react'

export default function GenderViolence() {
  return (
    <div className='gender-violence-section'>
        <div id='gender-violence-title'>
            <h1>¿Qué hacer en caso de <span className='highlighted-text'>violencia</span>?</h1>
        </div>
        <div id='main-content'>
            <div className='header-and-text-content'>
                <h2 className='power-text'>¡Tú tienes el poder!</h2>
                <p id='text-paragraph'>
                    La <span className='highlighted-text'>violencia de género</span>, así como la doméstica contra la mujer, continúa siendo, en estos momentos, un problema demasiado habitual en la sociedad. Sin embargo, la concienciación de la ciudadanía, unida a la aplicación de nuevas leyes y medidas de protección, está ayudando a ver poco a poco <span className='highlighted-text'>la luz al final del túnel</span>.
                </p>
                <a href="https://malostratos.org/violencia-de-genero/como-actuar-ante-violencia-de-genero/" target="_blank" rel="noopener noreferrer">
                    <button className='more-information-btn'>MÁS INFORMACIÓN</button>
                </a>
                
            </div>
            <div id='gender-violence-container'>
                <img id='gender-violence-img' src="src/assets/images/gender-violence.jpeg" alt="Gender violence" />
            </div>
        </div>
    </div>
  )
}
