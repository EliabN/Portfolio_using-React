// Import Outlet from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
//import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
//import Content from './components/sections/Content';
import Footer from './components/sections/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
