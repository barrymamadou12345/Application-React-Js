
import React from 'react';
import './Css/style.css';
import './index.css';

/*
function App(props) {
  return (
    // Les differents Methodes de styliser le comtenu dans React-Js
    // Avec bootstrap , et Css !
    // La deuxième Methode est la plus Efficace(Créer un fichier Css et L'importer)
    <main>
    <h1 className="pt-5 fw-bold" style={{fontSize: '30px', textAlign:'center', color:'green', }}>{props.titre}</h1>
    <h1 className=" text-center text-red-700 text-4xl">Je suis Là !</h1> 
    </main>
  )
}
*/

// Methode avec Les Classes !
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {verifie : false}
  }
  render(){
    return(
      <div>
        <button className=" bg-blue-700 rounded mt-5 py-2 px-3 ms-12"
        onClick={() => this.setState({ verifie : !this.state.verifie})} >Afficher L'image</button>
        {
          this.state.verifie ?
          <img src="./images/image-1.jpg" className='w-80 mt-5 ms-12 rounded' alt="Une image" />
          : null 
        }
        
      </div>
    )
  }
}



export default App ;