import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'

function App() {

  return (
    <div id="curriculo">
      <h1>Vinicius Krummenauer</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
