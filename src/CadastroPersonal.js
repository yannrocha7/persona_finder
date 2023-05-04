import './cadastro.css';


function CadastroPersonal() {
  return (
    <div class="container">
    <h1>Cadastro Personal</h1>
        <form> 

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
            
            <label for="tipo-treino">Tipo de Treino:</label>
            <input type="text" id="tipo-treino" name="tipo-treino" required />
            
            <label for="nome-completo">Nome Completo:</label>
            <input type="text" id="nome-completo" name="nome-completo" required />
            
            <label for="bairros">Bairros que dá aula:</label>
            <input type="text" id="bairros" name="bairros" required />
            
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required />
            
            <label for="estado">Estado:</label>
            <input type="text" id="estado" name="estado" required />
            
            <label for="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" required />
            
            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto" />
            
            <input type="submit" value="Cadastrar" /><br/>
           
        </form>
    </div>
  );
}

export default CadastroPersonal;
