import { createBrowserRouter } from "react-router-dom";
import RouterLayout from "./RouterLayout";
import App from "../App";
import { appChildren } from "./appChildren";

// OVDE SE KREIRA BROWSER ROUTER

// CREATE BROWSER ROUTER PRIMA ARRAY KAO ARGUMENT, A ARRAY IMA OBJEKTE KAO ELEMENTE
// RouterLayout SE UCITAVA NA HOMEPAGE I TO JE U INDEX.JS

// RouterLayout - homepage ima children koji takodje prihvata array.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        //posto je App children on RouterLayout- u RouterLayout se stavlja <Outlet/> da bi se ucitao App.js
        children: appChildren,
      },
    ],
  },
]);
