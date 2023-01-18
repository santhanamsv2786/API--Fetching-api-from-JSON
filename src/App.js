import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Detail from './Detail';
import Moreinfo from './Moreinfo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='detail' element={<Detail/>}/>
        <Route path='detail/moreinfo/:id' element={<Moreinfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
