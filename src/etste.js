import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CadastroPersonal from './CadastroPersonal'
import CadastroAluno from './CadastroAluno'

function App() {
  return (
    
    <Router>
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Personal Finder Logo" className="logo" />
        <h1 className="title">Personal Finder</h1>
        <Routes>
          <Route path="/" element={<form>
            <div className="form-group">
              <label className="label">Email:</label>
              <input type="email" id="email" className="input"  />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label">Password:</label>
              <input type="password" id="password" className="input" />
            </div>
            <button type="submit" className="submit-btn">Login</button><br />
          </form>} />
          <Route path="/cadastro-personal" element={<CadastroPersonal/>}/>
          <Route path="/cadastro-aluno" element={<CadastroAluno/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
