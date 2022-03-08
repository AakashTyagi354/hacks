
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/about' element={<About/>}/>
       <Route exact path='/services' element={<Services/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
       <Route exact path='/signup' element={<Signup/>}/>

     </Routes>
     </Router>
     

    </div>
  );
}

export default App;
