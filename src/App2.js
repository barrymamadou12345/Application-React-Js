import React, { useEffect, useState, useRef } from 'react';
import './Css/style.css';
import './index.css';
import Fruit from './composant/Fruit';
import FruitForm from './composant/FruitForm';

function App(props) {

  ///// State (état , données )/////////
  const [compteur, setConpteur] = useState(1)

  const monClick = () => {
    setConpteur(compteur + 1);
  }


  const [fruits, setFruits] = useState([
    { id: 1, nom: 'Banane' },
    { id: 2, nom: 'Orange' },
    { id: 3, nom: 'Mangue' },
  ])

  /////////// comportement ///////////////

  const handleAdd = (FruitAAjouter) => {
    // 1. Copier Mon State
    const copyFruits2 = [...fruits]

    copyFruits2.push(FruitAAjouter);

    // 1. Modifier mon State Avec Le Setter
    setFruits(copyFruits2);
  }

  const effacer = (id) => {
    // 1. Copier Mon State
    const copyFruits = [...fruits]

    // 1. Manipiler Mon State
    const fruitSupprime = copyFruits.filter(fruit => fruit.id !== id)

    // 1. Modifier mon State Avec Le Setter
    setFruits(fruitSupprime);
  }

  const [voir, setVoir] = useState(false);
  const base = useRef(false)

  useEffect(() => {
    if (base.current == false) {
      base.current = true;
    }
  }, [voir]);

  const [text, setText] = useState("");

  const LorsDuClick2 = (fruitNom) => {
    setVoir(!voir);
    setText(`J'aime trop ce fruit : ${fruitNom}`);
    // alert(`J'aime trop ce fruit ${fruitNom}`)
  }

  /////////// Affichage (render)//////////
  return (

    <div className=" bg-gray-300 ">

      {/* Exercice  1 */}
      <h1 className=' px-10 pt-8 fw-bold text-blue-600 text-3xl css my-20'>{props.titre2}</h1>

      <div className=" w-100 flex justify-center lom ">
        <div className='loum'>
          <h1 className=' px-10 pt-8 fw-bold text-blue-600 text-3xl css mb-3'> Compteur</h1>
          <div className=' flex items-center justify-center w-100'>
            <div className=" compteur">
              <p className='yes pb-3 '>{compteur}</p>
            </div>
          </div>

          <div className=" flex items-center justify-center w-100 pb-20">
            <button className='bg-green-800 rounded   mt-5 py-2 px-4 text-white'
              onClick={monClick} > Incrementer
            </button>
          </div>
        </div>

        {/* Exercice 2 */}

        <div className=" flex items-center justify-center pb-20 volum">
          <div className=" good">

            <div className=" w-80 m-auto">
              <h1 className='text-3xl text-blue-800 pb-6 text-center'> Liste Des Fruits</h1>

              <ul className='pb-8'>
                { voir ? <h1 className='text-center my-3 polo'> {text} </h1> : null}
                {fruits.map((fruit) => {
                  return (
                    <Fruit MonFruit={fruit}
                      onClick={() => LorsDuClick2(fruit.nom)}
                      LorsDuClick={effacer} key={fruit.id}
                    />
                  )
                })}
              </ul>
            </div>

            {/* Exercice 3 */}

            <FruitForm handleAdd={handleAdd} />

          </div>
        </div>
      </div>

    </div>
  )
}




export default App