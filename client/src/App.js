import { Routes, Route } from "react-router-dom";
import { Home, LienHe, Login } from "./containers/Public";
import { path } from './ultils/constant'


function App() {
  return (
    <div class="h-screen w-creen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
        </Route>

        <Route path={path.LOGIN} element={<Login />} />

        <Route path={path.LIENHE} element={<LienHe />} />
      </Routes>
    </div>
  );
}

export default App;

