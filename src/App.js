import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog'
import GuestBook from './Pages/GuestBook'

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
    <Route path='/guestbook' element={<GuestBook />} />

    </Routes>

    </div>
    
    
    </>
  );
}

export default App;
