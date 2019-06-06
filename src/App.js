//App Component: has state with GIFS

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import SearchField from './Components/SearchField.js';
import GifCard from './Components/GifCard';
//import { prependOnceListener } from 'cluster';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component{
  constructor(props){
    super(props);
  this.state={
    gif: props.gif
  }
}
  render(){
  return(<div>
      <SearchField></SearchField>
      <GifCard></GifCard>
       
    </div>
  );
   
  
}
}

//add the App.propType?
export default App
