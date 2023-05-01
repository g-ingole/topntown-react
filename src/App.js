import './App.css';
import Slider from './component/Slider';
// import Home from './component/Home'
// import Story from './component/Story';
import Nav from './component/Nav';
import Franchise from './component/Franchise';
import Contact from './component/Contact';
import Product from './component/Product';
import Career from './component/Career';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Slider/>}></Route>
        <Route path="/franchise" element={<Franchise/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
      </Routes>
    <Footer/> 

      {/* <Story /> */}
    </div>
  );
}

export default App;
