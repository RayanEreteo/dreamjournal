"use client"
import { useContext, useState, useEffect } from "react";

function useAuth() {
  const [userdata, setuserData] = useState(null);
  const [auth_token, setauthToken] = useState(null);

  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("user_data");
      const storedAuthToken = localStorage.getItem("auth_token");

      // Update state only if data is available
      if (storedUserData) {
        setuserData(storedUserData);
      }

      if (storedAuthToken) {
        setauthToken(storedAuthToken);
      }
    }
  }, []); // Run this effect only once after component mount

  return {
    userdata,
  };
}

export default useAuth;
