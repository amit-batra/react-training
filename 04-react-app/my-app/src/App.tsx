import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Cart} from './components/Cart';
import {ProductsList} from './components/ProductsList';
import { Default } from './components/Default';
import { Navbar } from './components/Navbar';
import { Details } from './components/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/products' element={<ProductsList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/' element={<ProductsList />} />
          <Route path='*' element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;