"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


function useAuth() {
  const [userdata, setuserData] = useState(null);
  const [auth_token, setauthToken] = useState(null);

  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("user_data");
      const storedAuthToken = localStorage.getItem("auth_token");

      if (storedUserData) {
        setuserData(JSON.parse(storedUserData));
      }

      if (storedAuthToken) {
        setauthToken(storedAuthToken);
      }

      if (storedUserData == null || storedAuthToken == null) {
        push('/login?from=main')
      }

      fetch("http://localhost:5000/tokenchecker", {
        method: "POST",
        headers: {"authorization": storedAuthToken}
      }).then(res => res.json())
      .then(data => {
        if (data.success === false) {
          push('/login?from=main')
        }
      })

    }
  }, []); // Run this effect only once after component mount

  return {
    userdata,
  };
}

export default useAuth;
