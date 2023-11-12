"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

function LoginUI() {
  const [loading, setloading] = useState(false);
  const [serverResponse, setserverResponse] = useState(null);

  const searchParams = useSearchParams();

  const registerResponse = searchParams.get("200")


function handleSubmit(e) {
    e.preventDefault();
    setloading(true)

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setserverResponse(data);
        setloading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div className="login-wrapper w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <div className="form-container bg-white rounded h-[350px] p-6 flex items-center justify-center text-center">
        <form onSubmit={handleSubmit}>
          <div className="input-fields flex flex-col">
            <input
              className="input-field"
              name="email"
              type="email"
              placeholder="Votre email...."
              required
            />
            <hr />
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder="Votre mot de passe...."
              required
            />
            <br />
          </div>
          <button type="submit" className="submit-button mb-6" disabled={loading}>
            Se connecter
          </button>
          <p>
            Aucun compte ?{" "}
            <Link href={"/register"} className="inline-link">
              S'inscrire
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
      <div className={`register-response mt-6 text-white bg-red-500 w-[100vw] text-center ${registerResponse ? "block" : "hidden"}`}>
        <p>Votre compte a été crée, veuillez vérifier votre boîte mail pour activer votre compte.</p>
      </div>
    </div>
  );
}

export default LoginUI;