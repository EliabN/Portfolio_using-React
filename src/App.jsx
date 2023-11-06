import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Content from './components/sections/Content';
import Footer from './components/sections/Footer';

// In our main App component, render only single instances of Header and Footer
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;