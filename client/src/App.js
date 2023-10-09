import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/public";
import {path} from './ultils/constant'
//npm i react-router-dom --save
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

