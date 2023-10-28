import CartWidget from './components/CartWidget'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido"}/>
    </div>
  )
}

export default App