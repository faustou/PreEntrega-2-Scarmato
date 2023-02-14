import './App.css';
import Header from './componentes/NavBar';
import './assets/img/aceite-esencial.png';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/itemDetailContainer';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={
              <ItemListContainer bienvenida='Bienvenidos a la tienda de flores de Bach' proximamente='Proximamente productos' />
            } />
            <Route path='/:categoryName' element={
              <ItemListContainer />
            } />
            <Route path='/detail/:id' element={
              <ItemDetailContainer />
            } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
);
}

export default App;