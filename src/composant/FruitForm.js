import React, { useEffect, useState, useRef } from 'react';


export default function FruitForm({handleAdd}) {
  ///// State (état , données )/////////

  const [newFruit, setNewFruit] = useState('');

  const inputChange = (ev) => {
    setNewFruit(ev.target.value);
  }
  /////////// comportement ///////////////

  const appuieSubmit = (event) => {
    event.preventDefault();

    // 1. Manipiler Mon State
    const leId = new Date().getTime();
    const leNom = newFruit;
    const FruitAAjouter =  { id: leId, nom: leNom }
    
    handleAdd(FruitAAjouter)

    setNewFruit('')
  }

  /////////// Affichage (render)//////////
  return (
    <form action="submit" onSubmit={appuieSubmit} className='long '>

    <input type="text" value={newFruit} onChange={inputChange} placeholder='Ajouter un fruit...'
      className='h-8 rounded px-2 long2 border-2 border-green-600 outline-none me-1' />

    <button className='bg-green-600 text-white h-8 px-2 py-1 rounded'>Ajouter + </button>

  </form>
  )
}
