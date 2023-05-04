import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function App() {
  const navigate = useNavigate(); // obtém a função de navegação do react-router-dom

  function handleCadastroPersonalClick() {
    navigate('/cadastro-personal'); // navega para a rota especificada
  }

  function handleCadastroAlunoClick() {
    navigate('/cadastro-aluno'); // navega para a rota especificada
  }
  return (
    <div className="login-container">
    <div className="login-box">
      <img src={logo} alt="Personal Finder Logo" className="logo" />
      <h1 className="title">Personal Finder</h1>
      <form>
        <div className="form-group">
          <label className="label">Email:</label>
          <input type="email" id="email" className="input"  />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input type="password" id="password" className="input" />
        </div>
        <button type="submit" className="submit-btn">Login</button><br />
        <button className="submit-cad-btn" onClick={handleCadastroPersonalClick}>Cadastrar Personal</button>
        <button className="submit-cad-btn" onClick={handleCadastroAlunoClick}>Cadastrar Aluno</button>
      </form>
    </div>
  </div>
  );
}

export default App;
