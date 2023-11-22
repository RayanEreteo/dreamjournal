"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function LoginUI() {
  const [loading, setloading] = useState(false);
  const [serverResponse, setserverResponse] = useState(null);
  const { push } = useRouter();
  
  const searchParams = useSearchParams();

  const fromSource = searchParams.get("from");

  function handleSubmit(e) {
    e.preventDefault();
    setloading(true);

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
        if (data.success === true) {
          localStorage.setItem('auth_token', data.token)
          localStorage.setItem("user_data",JSON.stringify(data.user_data))
          push("/main")
        }else{
          setloading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("auth_token") != null) {
      push("/main")
    }
  })

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
          <button
            type="submit"
            className="submit-button mb-6"
            disabled={loading}
          >
            Se connecter
          </button>
          <p>
            Aucun compte ?{" "}
            <Link href={"/register"} className="inline-link">
              S'inscrire
            </Link>
          </p>
          <p>
            {" "}
            <Link href={"/"} className="inline-link relative top-3">
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
      <div
        className={`register-response mt-6 text-white bg-red-500 w-[100vw] text-center ${
          fromSource == "register" ? "block" : "hidden"
        }`}
      >
        <p>
          Votre compte a été crée, veuillez vérifier votre boîte mail pour
          activer votre compte.
        </p>
      </div>
      <div
        className={`register-response mt-6 text-white bg-red-500 w-[100vw] text-center ${
          fromSource == "update" ? "block" : "hidden"
        }`}
      >
        <p>
          Votre mot de passe a changé, merci de vous reconnecter.
        </p>
      </div>
    </div>
  );
}

export default LoginUI;
