
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Services from './components/Services';
import Trusted from './components/Trusted';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Trusted />
    </div>
  );
}

export default App;
