import { Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import Home from './components/Home';
import Footer from './Footer/Footer';
import SingUp from './components/SingUp';

function App() {
  return (
    <div className='app'>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sing-up' element={<SingUp />}></Route>
    </Routes>

    <Footer />
     
    </div>
  );
}

export default App;
