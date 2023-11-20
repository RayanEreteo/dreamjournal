"use client";

import useAuth from "@/app/hooks/useAuth";
import Dreamjournal from "../Dreamjournal";
import Profilemenu from "../Profilemenu";

function MainUI() {
  const { userdata } = useAuth();

  return (
    <div className="dashboard">
      <Profilemenu userdata={userdata}/>
      <Dreamjournal />
    </div>
  );
}

export default MainUI;