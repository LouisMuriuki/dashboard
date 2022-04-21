import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/dark.scss"
import { userInputs, productInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";


function App() {
 const {darkMode}=useContext(DarkModeContext)
 const {currentUser}=useContext(AuthContext)

 const RequireAuth=({children})=>{
return currentUser? children :<Navigate to= "/login"/>

 } 

  return (
      <div className={darkMode ? "app dark-mode":"app"} style={{padding:"0",margin:"0"}}>
        <Router>
          <Routes>
            <Route path="/">
            <Route path="login" element={<Login />} />
              <Route index element={<RequireAuth><Home/></RequireAuth>} />
              <Route path="users">
                <Route index element={<RequireAuth><List /></RequireAuth>} />
                <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>} />
              </Route>
              <Route path="products">
                <Route index element={<RequireAuth><List /></RequireAuth>} />
                <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
