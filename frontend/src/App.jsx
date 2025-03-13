import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, ProductDetails, SignupPage, Homepage, ProductForm, EditProduct } from './Routes.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar will show on all pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
