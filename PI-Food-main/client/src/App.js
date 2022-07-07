import './App.css';
import Loading from './pages/loading/Loading';
import { Route, Routes} from "react-router-dom";
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Detail from './pages/detail/Detail'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Loading/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
    </div>
  );
}

export default App;
