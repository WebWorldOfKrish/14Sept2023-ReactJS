// 1. ImportArea

import './App.css';
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';




// 2. Function Definition Area

function App() {
  return (
    <>
      
      <Header />
      <main>
        <Aside />
        <Section />
      </main>
      <Footer />
    </>
  );
}

// 3. Export Area

export default App;
