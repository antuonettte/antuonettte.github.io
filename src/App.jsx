import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles/global.css';

const pageMap = {
  home: Home,
  about: About,
  gallery: Gallery,
  contact: Contact,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PageComponent = pageMap[activePage];

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main key={activePage} className="page-enter">
        <PageComponent onNavigate={navigate} />
      </main>

      <Footer onNavigate={navigate} />
    </>
  );
}
