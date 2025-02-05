import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";
import { useMyContext } from "../MyContext";
function EmployerPotal() {
  const { userEmployer} = useMyContext();
  return (
    <div>
      {userEmployer && <EmployerNavbar />}
      <Outlet />
    </div>
  );
}

export default EmployerPotal;
