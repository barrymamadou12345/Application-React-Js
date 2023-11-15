
import React, { useEffect, useState, useRef } from 'react';
import './Css/style.css';
import './index.css';
import Image from './component/Image';






function App(props) {

  const [titre , setTitre] = useState('Une autre methode');
  const [verifie , setVerifie] = useState(false);
  const maValeurInitiale = useRef(false)

  useEffect(() => console.log('composant Monté'));
  useEffect(() => {
    if (maValeurInitiale.current) {
      console.log('Le verifie est mis à Jour')
    }else{
      maValeurInitiale.current = true ;
    }
  }, [verifie]);

  function LorsDuClick() {
    setVerifie(!verifie);
  }

  return (
    <main>
      {console.log('JSX rendu')}
      <h1 className="pt-5 fw-bold" style={{fontSize: '30px', textAlign:'center', color:'green', }}>{props.titre}</h1>
      <h1 className=" text-center text-red-700 text-4xl">Je suis Là !</h1> 

      <h1 className=' px-10 pt-8 fw-bold text-blue-600 text-3xl css'>{titre}</h1>

        <button className=" bg-blue-700 rounded mt-5 py-2 px-3 ms-12 text-white"
          onClick={LorsDuClick} >
          Afficher L'image
        </button>

        {verifie ? <Image /> : null }

    </main>
  )
}








/*
// Methode avec Les Classes !
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { verifie: false, titre: 'Une autre methode' }
  }

  componentDidMount() {
    this.setState({ titre: 'La méthode a changé' })
  }

  componentDidUpdate(){
    console.log('Le composant est mis à jour');
  }

  render() {
    return (
      <div>
        <h1 className=' px-10 pt-8 fw-bold text-blue-600 text-3xl css'>
          {this.state.titre}
        </h1>

        <button className=" bg-blue-700 rounded mt-5 py-2 px-3 ms-12 text-white"
          onClick={() => this.setState({ verifie: !this.state.verifie })} >
          Afficher L'image
        </button>

        {
          this.state.verifie ?
            <Image />
          : null
        }

      </div>
    )
  }
}

*/


export default App;