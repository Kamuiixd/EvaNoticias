import { useState, useMemo } from 'react';
import './App.css';
import Header from './Components/layout/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/layout/Footer/Footer';
import CategoryPage from './Components/pages/Category/CategoryPage';
import Home from './Components/pages/Home/home';
import SearchPage from './Components/pages/Search/SearchPage';
import { SearchProvider } from './Components/pages/Search/SearchContext';
import { FavoritesProvider } from './Components/pages/Favorites/FavoritesContext';
import FavoritesPage from './Components/pages/Favorites/FavoritesPage';
import Login from './Components/LogIn/Login';
import Register from './Components/LogIn/Register';
import ProfilePage from './Components/LogIn/ProfilePage';
import { UserProvider } from './Components/LogIn/UserContext';

function App() {
  const [count, setCount] = useState(0);


  return (
    <UserProvider>
      <FavoritesProvider>
        <Router>
          <SearchProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              {/* Agrega las rutas de login y register */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
          </SearchProvider>
        </Router>
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;
