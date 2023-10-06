import { Routes, Route } from "react-router-dom";
import { Home, Login, Footer } from "./containers/public";
import {path} from './ultils/constant'

function App() {
  return (
    <div class="h-screen w-creen bg-primary">
      <Routes>
        <Route path = {path.HOME} element = {<Home />}/>
        <Route path = {path.LOGIN} element = {<Login />}/>
      </Routes>
    </div>
  );
}

export default App;

