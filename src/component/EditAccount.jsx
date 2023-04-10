import React, { useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../App";

function EditAccount() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    deposit: "",
  });
  const { users, setUsers } = useContext(UsersContext);
  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // KORISTIMO FIND DA VRATIMO U EDIT FORMU ODREDJENOG USERA NA OSNOVU ID-a KOJI DOLAZI KROZ PARAMS
    // NE MOZE SE FILTRIRATI JER FILTER VRACA ARRAY A NAMA TREBA ODR OBJ-ELEMENT IZ NIZA
    setInputData(users.find((user) => user.id === parseInt(id)));
    // NAKON OVOGA SVAKI INPUT USERA MORA DA IMA VALUE
    // PARSEINT PRETVARA STRING U NUMBER
  }, []);

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
    // setUsers([...users, { ...inputData, id: new Date().getTime() }]);
    setUsers(
      users.map((user) => {
        if (user.id === inputData.id) {
          return inputData;
        } else {
          return user;
        }
      })
    );
    redirect("/editDeleteAccount");
  };

  return (
    <Layout title={"Edit Account"}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="name"
          name="name"
          onInput={inputHandler}
          value={inputData.name}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="email"
          name="email"
          onInput={inputHandler}
          value={inputData.email}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="phone"
          name="phone"
          onInput={inputHandler}
          value={inputData.phone}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="deposit"
          name="deposit"
          onInput={inputHandler}
          value={inputData.deposit}
        />

        <button className="btn btn-primary px-5">Edit User</button>
      </form>
    </Layout>
  );
}

export default EditAccount;
