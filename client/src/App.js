import { Routes, Route } from "react-router-dom";
import { Home, Login, Profile, Test, Lienhe, Details } from "./containers/public";
import { path } from './ultils/constant'
import { CreatePost, PayPost, ManagePost, EditAccount, System, DepositHistory } from "./containers/system";
//npm i react-router-dom --save
function App() {
  return (
    <div class="h-screen w-creen">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.PROFILE} element={<Profile />} />
          <Route path={path.TEST} element={<Test />} />
          <Route path={path.LIENHE} element={<Lienhe />} />
          <Route path={path.DETAILS} element={<Details />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CREATE_POST} element={<CreatePost />} >
            <Route path={path.PAY_POST} element={<PayPost />} />
          </Route>
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />
          <Route path={path.DEPOSITHISTORY} element={<DepositHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

