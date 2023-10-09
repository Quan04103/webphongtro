import { Routes, Route } from "react-router-dom";
import { Home, Login, PayPost, CreatePost } from "./containers/public";
import {path} from './ultils/constant'

function App() {
  return (
    <div class="h-screen w-creen bg-primary">
      <Routes>
        <Route path = {path.HOME} element = {<Home />}/>
        <Route path = {path.PAY_POST} element = {<PayPost />}/>
        <Route path = {path.CREATE_POST} element = {<CreatePost />}/>


        
      </Routes>
    </div>
  );
}

export default App;

