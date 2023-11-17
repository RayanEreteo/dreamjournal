"use client";

import { useState } from "react"
import useAuth from "@/app/hooks/useAuth"

function MainUI() {
  const { userdata } = useAuth()
  console.log(userdata)

  return (
    <div className="dashboard">
      <h1>{userdata?.email}</h1>
    </div>
  )
}

export default MainUI