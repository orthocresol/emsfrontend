import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    axios
      .post("http://localhost:8080/api/v1/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      })
      .then((res) => {
        console.log(res.status, res.data.token);
        //if(res.status === 200) navigate('/login')
      })
      .catch((error) => console.log(error));
    console.log(payload);
  };
  return (
    <>
      <h1> Register </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="text" placeholder="email" name="email" />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
