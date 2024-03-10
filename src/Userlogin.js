import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin () {
    const navigate = useNavigate();

    useEffect(() => {
      document.title = "Login"
    })


    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
  
      axios
        .post("http://localhost:8080/api/v1/auth/login", {
          email: payload.email,
          password: payload.password,
        })
        .then((res) => {
          console.log(res.status, res.data.token);
          const token = res.data.token;
          const id = res.data.id;
          const email = payload.email;
          Cookies.set('token', token, {expires : 7, secure:  false})
          Cookies.set('id', id, {expires : 7, secure: false})
          Cookies.set('email', email, {expires : 7, secure: false})
          
          if(res.status === 200) navigate('/redirect', {replace : true})
        })
        .catch((error) => console.log(error));
      console.log(payload);
    };
    return (
      <>
        <h1> User Login </h1>
        <form onSubmit={handleSubmit}>
          <input className="input-field" type="text" placeholder="email" name="email" />
          <br />
          <input className="input-field" type="password" placeholder="password" name="password" />
          <br />
          <button className="button" type="submit">Login</button>
        </form>
  
        <h3> New User? Register here</h3>
        <button className="button" onClick={() => navigate("/register")}>Register</button>
      </>
    );
}