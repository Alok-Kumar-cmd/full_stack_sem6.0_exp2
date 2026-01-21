import { useState } from 'react'; // Import useState to manage state
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css'; 

function App() {
  // This variable remembers which page is currently active
  // We start with 'home'
  const [currentPage, setCurrentPage] = useState('home');

  // This function decides which component to show based on the state
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  };

  return (
    <div className="App">
      {/* Navigation Buttons */}
      <nav style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
        <button 
          onClick={() => setCurrentPage('home')} 
          style={{ marginRight: '10px', padding: '10px' }}>
          Home
        </button>
        
        <button 
          onClick={() => setCurrentPage('about')} 
          style={{ marginRight: '10px', padding: '10px' }}>
          About
        </button>
        
        <button 
          onClick={() => setCurrentPage('contact')} 
          style={{ padding: '10px' }}>
          Contact
        </button>
      </nav>

      {/* Render the active page here */}
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;