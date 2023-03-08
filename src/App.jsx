import './App.css';
import Header from './componentes/NavBar';
import './assets/img/aceite-esencial.png';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/itemDetailContainer';
import Footer from './componentes/footer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './componentes/CartContainer';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <CartContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={
                  <ItemListContainer />
                } />
                <Route path='/:categoryName' element={
                  <ItemListContainer />
                } />
                <Route path='/detail/:id' element={
                  <ItemDetailContainer />
                } />
                <Route path='/cart' element={
                  <CartContainer />
                } />
            </Routes>
            <Footer /> 
          </CartContextProvider>
        </BrowserRouter>



    </div>
);
}

export default App;