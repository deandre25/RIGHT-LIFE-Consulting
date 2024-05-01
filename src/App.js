import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CookiePopup from './components/CookiePopup';
import MainContent from './components/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThankYouPage from './pages/ThankYouPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
          <Route path='/about' element={<AboutUsPage />} />
        </Routes>
        <Footer />
        <CookiePopup />
      </BrowserRouter>
    </div>
  );
}

export default App;
