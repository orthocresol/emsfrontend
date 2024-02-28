import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import UpdateRoles from "./UpdateRoles";
import UpdateLock from "./UpdateLock";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/updateroles" element={<UpdateRoles />} />
        <Route path="/updatelock" element={<UpdateLock />} />

        <Route path="*" element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
