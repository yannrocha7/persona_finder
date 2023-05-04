import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CadastroPersonal from './CadastroPersonal';
import CadastroAluno from './CadastroAluno';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro-personal" element={<CadastroPersonal/>}/>
        <Route exact path="/cadastro-aluno" element={<CadastroAluno/>}/>
      </Routes>
  </Router>
  );
}

export default App;
