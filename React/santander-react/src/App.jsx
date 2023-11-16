import './App.css'
import MeuContador from './components/MeuContador';
import MinhaLista from './components/MinhaLista';
import Tarefas from './components/Tarefas';

function App() {

  return (
    <>
      <MinhaLista/>
      <Tarefas/>
    </>
  )
}



function MeuBotao(props) {
  console.log(props);

  return (
    <button>{props.conteudo}</button>
  );
}

export default App
