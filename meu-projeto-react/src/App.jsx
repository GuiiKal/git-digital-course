import MeuComponente from "./components/myComponents"
function App() {

  return (
    <div>
    <h1>Olá mundo, React!</h1>
    <MeuComponente />

    <MeuBotao conteudo='me clique'/>
    <MeuBotao conteudo='depois aqui'/>
    <MeuBotao conteudo='por fim aqui'/>
    </div>
  )
}
function MeuBotao(props){
  return (
    <button>{props.conteudo}</button>
  )
}


export default App
