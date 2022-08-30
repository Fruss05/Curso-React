import './App.css';
import Header from './assets/Header';
import Destacado from './assets/Destacado';
import Footer from './assets/Footer';
import Cupones from './assets/Cupones';
import PromoApp from './assets/PromoApp';


function App() {
  return (
    <div className='container-fluid fondo_negro'>
      <Header />
      <hr />
      <Destacado />
      <Cupones />
      <PromoApp />
      <Footer />

    </div>
  );
}

export default App;
