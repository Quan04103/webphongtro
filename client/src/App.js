import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Test, LienHe,CreatePost, PayPost, Details} from "./containers/public";
import {path} from './ultils/constant'
import { SearchItem } from "./components";
//npm i react-router-dom --save
function App() {
  return (
    <div class="h-screen w-creen">
      <Routes>
        <Route path = {path.HOME} element = {<Home />}>
          <Route path = {path.SEARCH} element = {<SearchItem />}/>
          <Route path = {path.SEARCHTEST} element = {<SearchItem />}/>
          
        </Route>
          <Route path = {path.LOGIN} element = {<Login />}/>
          <Route path = {path.PROFILE} element = {<Profile />}/>
          <Route path = {path.TEST} element = {<Test />}/>
          <Route path = {path.LIENHE} element = {<LienHe />}/>
          <Route path = {path.CREATE_POST} element = {<CreatePost />}/>
          <Route path = {path.PAY_POST} element = {<PayPost />}/>
          <Route path = {path.DETAILS} element = {<Details />}/>
        
      </Routes>
    </div>
  );
}

export default App;

