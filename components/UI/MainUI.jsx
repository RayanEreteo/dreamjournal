"use client";

import { useState } from "react"
import useAuth from "@/app/hooks/useAuth"

function MainUI() {
  const { userdata } = useAuth()

  const [username, setusername] = useState(userdata)

  return (
    <div className="dashboard">
      <h1>Bienvenue : {username}</h1>
    </div>
  )
}

export default MainUI