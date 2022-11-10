import { Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import Home from './components/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>

    <Footer />
     
    </>
  );
}

export default App;
