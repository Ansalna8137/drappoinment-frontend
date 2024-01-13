
import './App.css';
import DocCard from './Components/DocCard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';
import {Route, Routes} from 'react-router-dom'; 
import ViewDoc from './Components/ViewDoc';


function App() {
  return (
    <div className="App">
    <header>
      <Header/>
      </header> 
      
     <section>
     <Routes>
      <Route path='/' element={<Section/>} />
      <Route path='/view/:id' element={<ViewDoc/>}/>
     </Routes>
     </section>
   <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
