import React, { useState, useContext } from "react";
import Layout from "./Layout";
import { UsersContext } from "../App";
import { useNavigate } from "react-router-dom";

function AddAccount() {
  const [inputData, setInputData] = useState();
  const { users, setUsers } = useContext(UsersContext);
  const redirect = useNavigate();

  // SETTING INPUT DATA WITH NEW CREATED VARIABLE
  const inputHandler = (e) => {
    //funkciju poziva event i onda prihvatamo taj event kao e
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value; //ovde novom stejtu definisemo name/value
    setInputData(copyInputData);
    // console.log(inputData);
  };

  // ADDING OF NEW USER WITH RANDOM ID
  const submitHandler = (e) => {
    e.preventDefault();
    //ovde u jednoj liniji radimo ono sa 12linije
    setUsers([...users, { ...inputData, id: new Date().getTime() }]);
    // console.log(inputData);
    redirect("/");
  };

  return (
    <Layout title={"Add Accounts"}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="name"
          name="name"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="email"
          name="email"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="phone"
          name="phone"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="deposit"
          name="deposit"
          onInput={inputHandler}
        />

        <button className="btn btn-primary px-5">Add User</button>
      </form>
    </Layout>
  );
}

export default AddAccount;
