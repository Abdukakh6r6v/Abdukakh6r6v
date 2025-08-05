import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Menu from './Menu';
import Catalog from './Catalog';
import Notification from './Notification';
import SelectionProduct from './SelectionProduct';
import OurOils from './OurOils';
import RawPressed from './RawPressed';
import OilPresses from './OilPresses';
import Additions from './Additions';
import OurProduction from './OurProduction';
import Reviews from './Reviews';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import Footer from './Footer';
import ProductCardOils from './ProductCardOils';
import Shopping from './Shopping';
import Equipment from './Equipment';
import Oils from './Oils';
import Cake from './Cake';
import Loader from './Loader';
import './index.css';
import './main.css';

const MainPage = () => {
  return (
    <>
      <App />
      <SelectionProduct />
      <OurOils />
      <RawPressed />
      <OilPresses />
      <Additions />
      <OurProduction />
      <Reviews />
      <QuestionsAndAnswers />
      <Footer />
    </>
  );
}

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/ProductCardOils" element={<ProductCardOils />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/Oils" element={<Oils />} />
            <Route path="/Cake" element={<Cake />} />
            <Route path="*" element={<Notification />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);