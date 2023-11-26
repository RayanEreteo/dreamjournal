"use client";

import useAuth from "@/app/hooks/useAuth";
import Dreamjournal from "../Dreamjournal";
import Profilemenu from "../Profilemenu";

function MainUI() {
  const { userdata, authToken } = useAuth();

  return (
    <div className="dashboard min-h-screen">
      <Profilemenu userdata={userdata}/>
      <Dreamjournal authToken={authToken}/>
      <div className="warning-message bg-red-500">
        <p>Les articles sont toujours en développement, merci de votre compréhension.</p>
      </div>
    </div>
  );
}

export default MainUI;