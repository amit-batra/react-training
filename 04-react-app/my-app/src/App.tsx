import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Cart} from './components/Cart';
import {ProductsList} from './components/ProductsList';
import {ProductDetail} from './components/ProductDetail';
import {Default} from './components/Default';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<ProductsList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:id' element={<ProductDetail />} />
          <Route path='/' element={<ProductsList />} />
          <Route path='*' element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;