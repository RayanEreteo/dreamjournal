"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


function useAuth() {
  const [userdata, setuserData] = useState(null);
  const [authToken, setauthToken] = useState(null)

  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("user_data");
      const storedAuthToken = localStorage.getItem("auth_token");

      if (storedUserData) {
        setuserData(JSON.parse(storedUserData));
      }

      setauthToken(storedAuthToken)

      fetch("http://localhost:5000/tokenchecker", {
        method: "POST",
        headers: {"authorization": storedAuthToken}
      }).then(res => res.json())
      .then(data => {
        if (data.success === false) {
          localStorage.removeItem("auth_token")
          localStorage.removeItem("user_data")
          push('/login?from=main')
        }
      })

    }
  }, []);

  return {
    userdata,
    authToken
  };
}

export default useAuth;
