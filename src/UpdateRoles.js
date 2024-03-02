import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateRoles() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const updateRoleTeacher = () => {
    const token = Cookies.get("token");
    axios
      .put(
        `http://localhost:8080/api/v1/users/${location.state.id}`,
        {
          action: "update-role-to-teacher",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        navigate("/admindashboard", -1);
      })
      .catch((error) => console.log(error));
  };

  const updateRoleStudent = () => {
    const token = Cookies.get("token");
    axios
      .put(
        `http://localhost:8080/api/v1/users/${location.state.id}`,
        {
          action: "update-role-to-student",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        navigate("/admindashboard", -1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Update Roles</h1>
      <p>Name: {location.state.name}</p> <br />
      <p>Name: {location.state.email}</p> <br />
      <p>Name: {location.state.id}</p> <br />
      <button onClick={updateRoleTeacher}>Update to Teacher Role</button>
      <button onClick={updateRoleStudent}>Update to Student Role</button>
    </>
  );
}
