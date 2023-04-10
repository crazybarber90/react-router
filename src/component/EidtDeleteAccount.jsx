import React, { useContext } from "react";
import { UsersContext } from "../App";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function EidtDeleteAccount() {
  const { users, setUsers } = useContext(UsersContext);
  // console.log(users);

  const deleteHandler = (id) => {
    // console.log(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.deposit}</td>
          <td>
            {/* EDIT BTN */}
            <Link
              className="btn btn-warning me me-2"
              to={"/editAccount/" + user.id}
            >
              Edit
            </Link>
            {/* DELETE BTN */}
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteHandler(user.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Layout title={"Edit Delete Account"}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Deposit</th>
            <th>Edit-Delete</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </Layout>
  );
}

export default EidtDeleteAccount;
