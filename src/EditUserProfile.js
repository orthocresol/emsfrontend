import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function EditUserProfile() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = Cookies.get('token')
        const email = Cookies.get('email')

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        axios
      .post("http://localhost:8080/api/v1/user/updateprofile", {
        name: payload.name,
        email: email,
        phone: payload.phone,
        dept: payload.dept,
        studentID: payload.studentID,
        batch: payload.batch
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        navigate('/userdashboard', -1)
      })
      .catch((error) => console.log(error));
    console.log(payload);
    }
  return (
    <>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="text" placeholder="phone" name="phone" />
        <br />
        <input type="text" placeholder="dept" name="dept" />
        <br />
        <input type="text" placeholder="studentID" name="studentID" />
        <br />
        <input type="text" placeholder="batch" name="batch" />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
