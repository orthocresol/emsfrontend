import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdvisorInfo() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [advisor, setAdvisor] = useState({});
  

  const requestTeacher = (e) => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    console.log(e.target.value);
    axios
      .post(
        "http://localhost:8080/api/v1/advisor/sendrequest",
        {
          id: 1,
          emailTeacher: e.target.value,
          emailStudent: email,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => loadInfo())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadInfo();
    findAdvisor();
  }, []);

  const findAdvisor  = () => {
    const token = Cookies.get("token");
    const email = Cookies.get('email');
    axios
      .get(`http://localhost:8080/api/v1/advisor/findadvisor/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAdvisor(res.data);
      })
      .catch((error) => console.log(error));
  }

  const loadInfo = () => {
    const token = Cookies.get("token");
    const email = Cookies.get('email');
    axios
      .get(`http://localhost:8080/api/v1/advisor/getavailableteachers/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1> Advisor Info</h1>
      <h2>Your current advisor is {advisor?.name}, {advisor?.designation}, {advisor?.faculty}</h2>
      <h2> List of available teachers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Faculty</th>
            <th>Designation</th>
            <th>Active Status</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.faculty}</td>
                <td>{val.designation}</td>
                <td>{val.lock}</td>

                <td>
                  <button value={val.email} onClick={requestTeacher}>
                    Send Request
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={() => navigate("/requestedteachers")}>
        Show list of teachers you sent request{" "}
      </button>
    </>
  );
}
