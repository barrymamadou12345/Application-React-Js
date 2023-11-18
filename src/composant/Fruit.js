
import React from 'react'


export default function Fruit({ MonFruit, LorsDuClick, onClick }) {
  
  return (
    <li className='text-2xl flex items-center justify-center mb-1 py-1 text-center '>
      {MonFruit.nom}
      <button className='bg-red-600 text-white ms-5 text-sm 
      pb-6 w-6 h-5 rounded-xl'
        onClick={() => LorsDuClick(MonFruit.id)}
      >x</button>

      <button className='bg-green-600 text-white ms-5 text-sm 
      pb-6 w-6 h-5 rounded-xl'
        onClick={onClick}
      >./</button>
    </li>
  )
}
