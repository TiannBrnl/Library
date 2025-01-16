import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Login from './Login.jsx';
import Library from './components/library/Library.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Library/> 
      <About/>
      <Contact/>
    </div>
    
    
    </>
      
  
   
  );
}

export default App;
