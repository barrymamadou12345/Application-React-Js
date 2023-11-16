import React, { Component, useEffect, useState } from 'react';

export default function Image({ nomImage1, index , supprimerMonImage }) {

  const [boutonFermer, setBoutonFermer] = useState(-1);

  return (

    <div className="relative"
      onMouseEnter={() => setBoutonFermer(index)}
      onMouseLeave={() => setBoutonFermer(-1)}
    >
      <button className={`bg-white w-5 h-5 pb-1 font-thin rounded-xl text-center flex justify-center 
            items-center absolute text-red-900  right-10 top-12 text-sm focus:outline-none ${index === boutonFermer ? '' : 'hidden'}`}
        onClick={() => supprimerMonImage(index)} > x </button>

      <img src={nomImage1} className='w-60 mt-5 ms-12 rond' alt="Une image" />

    </div>
  )
}
