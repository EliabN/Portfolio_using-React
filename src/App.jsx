import Header from './components/sections/Header';
import Content from './components/sections/Content';
import Footer from './components/sections/Footer';

// In our main App component, render only single instances of Header and Footer
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;