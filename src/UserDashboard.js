import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
    const navigate = useNavigate()
    const [userinfo, setUserInfo]=useState({})
  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = () => {
    const email = Cookies.get("email");
    const token = Cookies.get('token');

    console.log(email)
    axios
      .get(`http://localhost:8080/api/v1/user/info/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserInfo(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return <>

  <h1>Profile</h1>
    <h3>Name: {userinfo?.name}</h3>
    <h3>Email: {userinfo?.email}</h3>
    <h3>Phone: {userinfo?.phone}</h3>

    {0 === 1 ? <div></div> : <h3>Dept: {userinfo?.dept}</h3>}
    {0 === 1 ? <div></div> : <h3>Student ID: {userinfo?.studentID}</h3>}
    {0 === 1 ? <div></div> : <h3>Batch: {userinfo?.batch}</h3>}


    <h3>Role: {userinfo?.role}</h3>

    <button onClick={() => navigate("/edituserprofile")}>Edit your profile</button>
    <button onClick={() => navigate("/advisorinfo")}>Advisor Information</button>


  </>;
}
