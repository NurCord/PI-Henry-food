import './App.css';
import Loading from './pages/Loading';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/Create'
import Diets from './pages/Diets'
import Detail from './pages/Detail'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Loading/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/diets' element={<Diets/>}/>
    </Routes>
    </div>
  );
}

export default App;
