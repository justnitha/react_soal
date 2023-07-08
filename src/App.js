import './App.css';
import { HashRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages/Home';
import Latihan from './pages/Latihan';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import SKD from './pages/Skd';
import LatihanGratis from './pages/Latihan-Gratis';
import Nilai from './pages/Nilai';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <> <Navbar/><Home/> </>} />
        <Route path='/skd' element={ <> <Navbar/> <SKD/> </> } />
        <Route path='/skd/try-out-gratis' element={ <> <Navbar/><LatihanGratis/> </> } />
        <Route path='/skd/try-out-gratis/nilai' element={ <> <Navbar/><Nilai/> </> } />
        <Route path='latihan' element={ <> <Navbar/><Latihan/> </> } />
        <Route path='profile' element={ <> <Navbar/><Profile/> </> } />
        <Route path='*' element={ <NotFound/> } />
      </Routes>
    </Router>
  );
}

export default App;
