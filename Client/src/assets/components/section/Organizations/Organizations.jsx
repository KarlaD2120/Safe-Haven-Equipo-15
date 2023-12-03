import React from 'react'
import Cards from './Cards';

export default function Organizations() {

  const organizations = [
    {
      name: "ORMUSA",
      photo: "src/assets/images/ORMUSA-LOGO.png",
      socialMedia: "@ormusa.org",
      description: "Realizan estudios sobre la situación actual de las mujeres como defensoras de derechos humanos en El Salvador y sobre normas y procesos de búsqueda de personas desaparecidas, especialmente mujeres.",
      contact: "Tel.: (503) 2556 0032",
      url: "https://ormusa.org/"
    },
    {
      name: "Corte suprema de justicia",
      photo: "src/assets/images/corte-suprema.png",
      socialMedia: "@cortesupremasv",
      description: "Esta dirección ofrece servicios de atención integral para garantizar el acceso a la justicia de las víctimas de violencia de género, abuso sexual y maltrato a niñas, niños y adolescentes, así como violencia intrafamiliar.",
      contact: "Tel.: (503) 2271-8888",
      url: "https://www.csj.gob.sv/unidad-tecnica-de-atencion-integral-a-victimas-y-genero-servicios/"
    },
    {
      name: "Movimiento Salvadoreño de Mujeres",
      photo: "src/assets/images/LOGO-MSM.png",
      socialMedia: "@mujeres.msm",
      description: "Esta organización feminista lucha por las transformaciones sociales, trabajando en la defensa de los derechos humanos de las mujeres, juventudes y niñez, para una vida libre de violencia, sin brechas de desigualdad y lograr la equidad entre los géneros en El Salvador.",
      contact: "Tel.: (503) 2235-3756",
      url: "https://mujeresmsm.org/"
    }

    
    // Agrega más organizaciones si lo necesitas
  ];

  return (
    <div id='main-organizations-container'>
      <div className='text-container'>
        <p>
          Buscamos activamente que tengas más <span className='highlighted-text'>redes de apoyo</span>, es por eso que implementamos junto con el apoyo de organizaciones un apartado de apoyo para ti, las cuales se presentan a continuacion. Puedes <span className='highlighted-text'>darle click a la organización de tu interés</span> para redirigirte a su página oficial.
        </p>
        <h1>Organizaciones</h1>
      </div>
      <div className='cards'>
      {organizations.map((organization, index) => (
        <Cards key={index} {...organization} />
      ))}
      </div>
    </div>
  )
}
