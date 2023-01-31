import './App.css';
import Header from './componentes/NavBar';
import './assets/img/aceite-esencial.png';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Header />
      <ItemListContainer bienvenida='Bienvenidos a la tienda de flores de Bach' proximamente='Proximamente productos' />

    </div>
);
}

export default App;