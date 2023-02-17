import { Route, Routes } from 'react-router-dom';
// MUI
import { Container } from '@mui/material';
// Components
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: '100px' }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Container>
      <Cart />
    </>
  );
};

export default App;
