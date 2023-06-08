import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import Home from './components/Home';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/todo' element={<Todos/>} />
          <Route path='/sum' element={<Sum/>} />        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
