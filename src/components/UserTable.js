import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { UserService } from "../services/UserService.js";
function UserTable() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await UserService();
    if (res && res.data && res.data.data) {
      setUserList(res.data.data);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {userList &&
          userList.length > 0 &&
          userList.map((item, index) => {
            return (
              <tr key={`user-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default UserTable;
