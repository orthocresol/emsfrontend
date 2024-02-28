import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateLock() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const lockUser = () => {
    const token = Cookies.get("token");
    axios
      .get(`http://localhost:8080/api/v1/admin/lock/${location.state.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {

        navigate("/admindashboard", -1);
      })
      .catch((error) => console.log(error));
  };

  const unlockUser = () => {
    const token = Cookies.get("token");
    axios
      .get(`http://localhost:8080/api/v1/admin/unlock/${location.state.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {

        navigate("/admindashboard", -1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Update Lock</h1>
      <p>Name: {location.state.name}</p> <br/>
      <p>Name: {location.state.email}</p> <br/>
      <p>Name: {location.state.id}</p> <br />

      <button onClick={lockUser}>Lock User</button>
      <button onClick={unlockUser}>Unlock User</button>

    </>
  );
}
