
/* Debut React Js */
import ReactDOM from "react-dom";

import App from './App';
import App2 from './App2';

ReactDOM.render(<div>
  <App titre = 'Bonjour La Famille !' />,
  <App2 titre2 = 'Mon deuxiem Exercice' />
</div>, document.querySelector('#root')) ;