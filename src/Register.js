import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Registration";
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    axios
      .post("http://localhost:8080/api/v1/auth/registration", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        phone: payload.phone,
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
        <input className="input-field" type="text" placeholder="name" name="name" />
        <br />
        <input className="input-field" type="text" placeholder="email" name="email" />
        <br />
        <input className="input-field" type="password" placeholder="password" name="password" />
        <br />
        <input className="input-field" type="text" placeholder="phone" name="phone" />
        <br />
        <button className="button" type="submit">Register</button>
      </form>
      <button className="button" onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
