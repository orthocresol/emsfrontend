import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function EditUserProfileTeacher() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const email = Cookies.get("email");

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    axios
      .post(
        "http://localhost:8080/api/v1/user/updateprofileteacher",
        {
          name: payload.name,
          email: email,
          phone: payload.phone,
          faculty: payload.faculty,
          designation: payload.designation,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        navigate("/teacherdashboard", -1);
      })
      .catch((error) => console.log(error));
    console.log(payload);
  };
  return (
    <>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="text" placeholder="phone" name="phone" />
        <br />
        <input type="text" placeholder="faculty" name="faculty" />
        <br />
        <input type="text" placeholder="designation" name="designation" />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
