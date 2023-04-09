import Accounts from "../component/Accounts";
import AddAccount from "../component/AddAccount";
import EditDeleteAccount from "../component/EidtDeleteAccount";
import EditAccount from "../component/EditAccount";

export const appChildren = [
  {
    path: "/",
    element: <Accounts />,
  },
  {
    path: "/addAccount",
    element: <AddAccount />,
  },
  {
    path: "/editDeleteAccount",
    element: <EditDeleteAccount />,
  },
  {
    path: "/ediAccount",
    element: <EditAccount />,
  },
];
