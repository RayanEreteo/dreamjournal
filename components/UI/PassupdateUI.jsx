"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@/app/hooks/useAuth";

function PassupdateUI() {
  const [loading, setloading] = useState(false);
  const [serverResponse, setserverResponse] = useState(null);

  const { authToken } = useAuth();

  const { push } = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setloading(true);

    const formData = {
      current_password: e.target.current_password.value,
      new_password: e.target.new_password.value,
    };

    fetch("http://localhost:5000/passupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: authToken,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setserverResponse(data);
        setloading(false);
        if (data.success === true) {
          localStorage.removeItem("auth_token")
          localStorage.removeItem("user_data")
          push("/login?from=update");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="update-wrapper w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <div className="form-container bg-white rounded h-[350px] p-6 flex items-center justify-center text-center">
        <form onSubmit={handleSubmit}>
          <div className="input-fields flex flex-col">
            <input
              className="input-field"
              name="current_password"
              type="password"
              placeholder="Ancien mot de passe...."
              required
            />
            <hr />
            <input
              className="input-field"
              name="new_password"
              type="password"
              placeholder="Nouveau mot de passe...."
              required
            />
            <br />
          </div>
          <button
            type="submit"
            className="submit-button mb-6"
            disabled={loading}
          >
            Changer le mot de passe
          </button>
          <p>
            {" "}
            <Link href={"/main"} className="inline-link relative top-3">
              Retour
            </Link>
          </p>
          <p
            className={`${
              serverResponse &&
              (serverResponse.success === true
                ? "server-response-success"
                : "server-response-failure")
            } mt-5`}
          >
            {serverResponse && serverResponse.message}
          </p>
        </form>
      </div>
    </div>
  );
}

export default PassupdateUI;
