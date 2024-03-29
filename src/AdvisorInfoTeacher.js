import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdvisorInfoTeacher() {
  const navigate = useNavigate();
  const [requestedStudents, setRequestedStudents] = useState([]);

  const acceptRequest = (e) => {
    const token = Cookies.get("token");
    const id = Cookies.get("id");
    const email = Cookies.get("email");
    console.log(e.target.value);
    axios
      .post(
        `http://localhost:8080/api/v1/teachers/${id}/requested-students`,
        {
          id: 1,
          emailTeacher: email,
          emailStudent: e.target.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => loadInfo())
      .catch((error) => console.log(error));
  };

  const rejectRequest = (e) => {
    const token = Cookies.get("token");
    const id = Cookies.get("id");
    const email = Cookies.get("email");
    
    console.log(e.target.value);
    axios
      .put(
        `http://localhost:8080/api/v1/teachers/${id}/requested-students`,
        {
          id: 1,
          emailTeacher: email,
          emailStudent: e.target.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => loadInfo())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    document.title = "Advisor Information"

    loadInfo();
  }, []);

  const loadInfo = () => {
    const token = Cookies.get("token");
    const id = Cookies.get("id");
    axios
      .get(
        `http://localhost:8080/api/v1/teachers/${id}/requested-students`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setRequestedStudents(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>List of request</h1>
      <table className="center-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dept</th>
            <th>Student ID</th>
            <th>Batch</th>
            <th>Active Status</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {requestedStudents.map((val) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.dept}</td>
                <td>{val.studentID}</td>
                <td>{val.batch}</td>
                <td>{val.lock}</td>

                <td>
                  <button className="button" value={val.email} onClick={acceptRequest}>
                    Accept Request
                  </button>
                  <button className="button" value={val.email} onClick={rejectRequest}>
                    Reject Request
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="button" onClick={() => navigate("/enrolledstudents")}>
        Enrolled Students
      </button>
    </>
  );
}
