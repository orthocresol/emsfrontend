import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function EnrolledStudents() {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = () => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");

    axios
      .get(`http://localhost:8080/api/v1/teachers/${email}/enrolled-students`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setEnrolledStudents(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>List of enrolled students</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dept</th>
            <th>Student ID</th>
            <th>Batch</th>
            <th>Active Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.dept}</td>
                <td>{val.studentID}</td>
                <td>{val.batch}</td>
                <td>{val.lock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
