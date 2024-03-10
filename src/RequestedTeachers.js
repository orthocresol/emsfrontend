import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function RequestedTeachers() {
  const [requestedTeacher, setRequestedTeacher] = useState([]);

  useEffect(() => {
    document.title = "Requested Teachers"

    const token = Cookies.get("token");
    const id = Cookies.get("id");

    axios
      .get(`http://localhost:8080/api/v1/students/${id}/requested-teachers`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRequestedTeacher(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h2>List of teachers you sent request</h2>

      <table className="center-table">
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
          {requestedTeacher.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.faculty}</td>
                <td>{val.designation}</td>
                <td>{val.lock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
