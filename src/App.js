import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { createContext, useState } from "react";

export const UsersContext = createContext(null);

const userDb = [
  {
    id: 1,
    name: "Nikola",
    phone: "0607053042",
    email: "pepy90aa@gmail.com",
    deposit: 100000,
  },
  {
    id: 2,
    name: "Nenad",
    phone: "0611356005",
    email: "nenad91@gmail.com",
    deposit: 30000,
  },
];

function App() {
  const [users, setUsers] = useState(userDb);

  return (
    <>
      <Navbar />
      {/* posto provider prihvata samo jedan param, poslacemo i users i setUsers destrukcijom kao jedan param */}
      <UsersContext.Provider value={{ users, setUsers }}>
        {/* i sada svuda u outletu ima pristup ovim userima */}
        <Outlet />
      </UsersContext.Provider>
    </>
  );
}

export default App;
