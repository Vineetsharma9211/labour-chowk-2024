import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useMyContext } from "../MyContext";
import axios from "axios";
import Loading from "../Loading";
import { useState } from "react";
import toast from "react-hot-toast";
function EmployerNavbar() {
 const {userEmployer,setUserEmployer}=useMyContext()
 const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5500/api/auth/employer/logout", {
          withCredentials: true, // Include credentials in the request
        })
      setUserEmployer(null);
      setIsLoading(false);
      toast.success(response.data.message)     
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching profile data:", error);
    }
  };
  return (
    <div>
            {isLoading ? (
        <Loading />
      ) : (
      <Menubar className="justify-between bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
        <MenubarMenu>
          <Avatar className=" w-fit">
            <AvatarImage src="../../../assets/LabourChowk.png" />
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem><Link to="/employer">Home</Link></MenubarItem>
            {userEmployer && <>
              <MenubarSeparator />
            <MenubarItem><Link to="/employer/profile">Profile</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link to="/employer/createavacancy">Create a vacancy</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link to="/support">Support</Link></MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={handleLogout} className="bg-red-600 text-slate-50">
              Logout
            </MenubarItem>
            <MenubarSeparator /></>}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
       )}
    </div>
  );
}

export default EmployerNavbar;
