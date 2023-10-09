import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Test} from "./containers/public";
import {path} from './ultils/constant'
//npm i react-router-dom --save
function App() {
  return (
    <div class="h-screen w-creen bg-primary">
      <Routes>
        <Route path = {path.HOME} element = {<Home />}/>
        <Route path = {path.LOGIN} element = {<Login />}/>
        <Route path = {path.PROFILE} element = {<Profile />}/>
        <Route path = {path.TEST} element = {<Test />}/>
      </Routes>
    </div>
  );
}

export default App;

