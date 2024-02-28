import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import UpdateRoles from "./UpdateRoles";
import UpdateLock from "./UpdateLock";
import UserLogin from "./Userlogin";
import EditUserProfile from "./EditUserProfile";
import AdvisorInfo from "./AdvisorInfo";
import RequestedTeachers from "./RequestedTeachers";
import TeacherDashboard from "./TeacherDashboard";
import EditUserProfileTeacher from "./EditUserProfileTeacher";
import AdvisorInfoTeacher from "./AdvisorInfoTeacher";
import EnrolledStudents from "./EnrolledStudents";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/edituserprofile" element={<EditUserProfile />} />
        <Route path="/edituserprofileteacher" element={<EditUserProfileTeacher />} />
        <Route path="/advisorinfo" element={<AdvisorInfo />} />
        <Route path="/advisorinfoteacher" element={<AdvisorInfoTeacher />} />
        <Route path="/requestedteachers" element={<RequestedTeachers />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/enrolledstudents" element={<EnrolledStudents />} />


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
