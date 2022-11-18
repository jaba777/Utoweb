import { Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';
import Home from './Pages/Home';
//import Footer from './Footer/Footer';
import SingUp from './Pages/SingUp';
import SingIn from './Pages/SingIn';
import FooterContain from './ParentsComponents/FooterContain';
import Contacts from './Pages/Contacts';
import Error from './Pages/Error';


function App() {
  return (
    <div className='app'>
    <Header />

    <Routes>
      <Route path='/' element={<FooterContain><Home /></FooterContain>}></Route>
      <Route path='/sing-up' element={<SingUp />}></Route>
      <Route path='/sing-in' element={<SingIn/>}></Route>
      <Route path='/contact' element={<Contacts />}></Route>

      <Route path='*' element={<Error />}></Route>
    </Routes>

    {/*<Footer />*/}
     
    </div>
  );
}

export default App;
