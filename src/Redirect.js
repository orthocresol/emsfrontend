import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect () {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Redirecting..."
        loadInfo();
    });

    const loadInfo = () => {
        const id = Cookies.get('id')
        const token = Cookies.get('token')

        axios
        .get(`http://localhost:8080/api/v1/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` },})
        .then((res) => {
          if(res.data.role === "STUDENT") navigate('/userdashboard', {replace : true})
          if(res.data.role === "TEACHER") navigate('/teacherdashboard', {replace : true})
          if(res.data.role === "ADMIN") navigate('/admindashboard', {replace : true})
          if(res.data.role === "USER") navigate('/userdashboard', {replace : true})

        

        })
        .catch((error) => console.log(error));
    }

    return <>
    </>
}