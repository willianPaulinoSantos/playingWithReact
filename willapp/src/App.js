import './App.css';
import React, { useState } from 'react';

function App(props) {

  const [ usuario, setUsuario ] = useState('Willian');

  return (
    <div className="App">
      <header className="App-header">
       <>
        <h1>{ props.title }</h1>
        <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário"/>
        <button type="button">Pesquisar</button>
       </>
      </header>
    </div>
  );
}

export default App;
