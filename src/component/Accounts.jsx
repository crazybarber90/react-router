import React from "react";

function Accounts() {
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
          </table>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
