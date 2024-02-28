import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = () => {
    const token = Cookies.get("token");
    axios
      .get("http://localhost:8080/api/v1/admin/getallusers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8080/api/v1/admin/getallteachers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8080/api/v1/admin/getallstudents", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setStudents(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8080/api/v1/admin/getalladmins", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAdmins(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1> Admin Dashboard {} </h1>
      <h2> List of Admin </h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {users.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <h2> List of Users </h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.role}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate("/updateroles", {
                            state: {
                              id: val.id,
                              name: val.name,
                              email: val.email,
                            },
                          })
                        }
                        value={val.id}
                      >
                        Update Role
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {!students.length ? (
        <div></div>
      ) : (
        <div>
          <h2> List of Students </h2>
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
              {students.map((val) => {
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

                    <td>
                      <button
                        onClick={() =>
                          navigate("/updatelock", {
                            state: {
                              id: val.id,
                              name: val.name,
                              email: val.email,
                            },
                          })
                        }
                      >
                        {" "}
                        Change Status
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {!teachers.length ? (
        <div></div>
      ) : (
        <div>
          <h2> List of Teachers </h2>
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
                      <button
                        onClick={() =>
                          navigate("/updatelock", {
                            state: {
                              id: val.id,
                              name: val.name,
                              email: val.email,
                            },
                          })
                        }
                      >
                        {" "}
                        Change Status
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      
    </>
  );
}