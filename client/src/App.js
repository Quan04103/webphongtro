import './index.css'
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './containers/Public';
import { path } from './ultils/constant';



function App() {
  return (
    <div class="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        
      </Routes>
      <h2>ADSDASDAS</h2>
    </div>
  );
}

export default App;

