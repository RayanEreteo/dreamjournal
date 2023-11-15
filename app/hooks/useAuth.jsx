"use client";

import { useContext, useState, useEffect } from "react";

function useAuth() {
  const [userdata, setuserData] = useState(() =>
    localStorage.getItem("user_data")
  );
  const [auth_token, setauthToken] = useState(() =>
    localStorage.getItem("auth_token")
  );

  return {
    userdata,
  };
}

export default useAuth;
