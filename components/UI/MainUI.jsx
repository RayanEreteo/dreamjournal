"use client";

import { useState } from "react"
import useAuth from "@/app/hooks/useAuth"

function MainUI() {
  const { userdata } = useAuth()

  return (
    <div className="dashboard">
      <h1>Bienvenue : {userdata}</h1>
    </div>
  )
}

export default MainUI