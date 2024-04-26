import './App.scss';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import SideBarNav from './Components/SideBarNav/SideBarNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBarNav className='sideBarNav'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
