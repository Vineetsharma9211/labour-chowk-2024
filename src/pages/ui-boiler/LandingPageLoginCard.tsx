import { User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function LandingPageLoginCard({setisLabor,setisEmployer}) {
  const handleLabor=()=>{
    setisLabor(true);
    setisEmployer(false)
  }
  const handleEmployer=()=>{
    setisLabor(false);
    setisEmployer(true)
    
  }
  return (
    <Card className=" w-[350px] h-[50vh] bg-white shadow-md ring-2 ring-gray-900 ring-opacity-40">
      <CardHeader>
        <CardTitle className="flex justify-center space-y-1.5">Welcome to Labor Chowk</CardTitle>
        <CardDescription className="flex justify-center space-y-1.5">
          Dive into new opportunities with one-click.
        </CardDescription>
      </CardHeader>
      <CardContent >
        <div className="grid items-center w-full gap-5">
          <div className="flex justify-center h-20 space-y-1.5">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://img.freepik.com/premium-vector/group-people-different-professions-standing-celebrate-labour-day-illustration_138260-1086.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Button onClick={handleLabor}>
              <User className="w-4 h-4 mr-2" />Continue as labor
            </Button>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Button onClick={handleEmployer}>
              <Users className="w-4 h-4 mr-2" /> Continue as employer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LandingPageLoginCard;
