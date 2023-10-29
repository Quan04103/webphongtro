import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Test, PayPost, LienHe, Details } from "./containers/public";
import { path } from './ultils/constant'
import { CreatePost, ManagePost, EditAccount, System } from "./containers/system";
//npm i react-router-dom --save
function App() {
  return (
    <div class="h-screen w-creen">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.PROFILE} element={<Profile />} />
        <Route path={path.LIENHE} element={<LienHe />} />
        <Route path={path.CREATE_POST} element={<CreatePost />} />
        <Route path={path.PAY_POST} element={<PayPost />} />
        <Route path={path.DETAILS} element={<Details />} />
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CREATE_POST} element={<CreatePost />} />
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

