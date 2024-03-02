import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditUserProfileTeacher() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Update profile"
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const email = Cookies.get("email");

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    axios
      .put(
        `http://localhost:8080/api/v1/teachers/${email}`,
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
        <input className="input-field" type="text" placeholder="name" name="name" />
        <br />
        <input className="input-field" type="text" placeholder="phone" name="phone" />
        <br />
        <input className="input-field" type="text" placeholder="faculty" name="faculty" />
        <br />
        <input className="input-field" type="text" placeholder="designation" name="designation" />
        <br />
        <button className="button" type="submit">Update</button>
      </form>
    </>
  );
}
