import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import TotalFromSubmission from './Pages/TotalFromSubmission';

import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
    <div className='container'>
    <Navbar />
    
   

   
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/totalemail' element={<TotalFromSubmission />} />


    </Routes>

    </div>
    
    
    </>
  );
}

export default App;
