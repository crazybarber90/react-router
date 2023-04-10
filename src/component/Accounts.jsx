import React, { useContext } from "react";
import { UsersContext } from "../App";

function Accounts() {
  // sada ovde prihvatamo usere iz App.js koristimo hook useContext
  // const context = useContext(UsersContext);
  const { users } = useContext(UsersContext);
  // console.log(users);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.deposit}</td>
        </tr>
      );
    });
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h1 className="text-center mb-5">Accounts</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Deposit</th>
              </tr>
            </thead>
            <tbody>{renderUsers()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
