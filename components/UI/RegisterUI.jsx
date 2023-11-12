"use client";

import Link from "next/link";
import { useState } from "react";
import { RedirectType, useRouter } from 'next/navigation'


function RegisterUI() {
  const [loading, setloading] = useState(false);
  const [serverResponse, setserverResponse] = useState(null);

  const { push } = useRouter();


  function handleSubmit(e) {
    e.preventDefault();
    setloading(true)

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
      dream_capability: e.target.dream_capability.value,
    };

    fetch("http://localhost:5000/register", {
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

        if (data.success == true) {
          push("/login?200=true")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="register-wrapper w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="form-container bg-white rounded h-[400px] p-6 flex items-center justify-center text-center">
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
              minlength="8"
              required
            />
            <br />
          </div>
          <p className="mb-6">Combien de rêves vous souvenez vous par nuit ?</p>
          <select className="dropdown mb-6" name="dream_capability">
            <option value="none">Aucun rêve</option>
            <option value="rarely">très rarement, 1 rêve par nuit</option>
            <option value="everynight">1 rêve par nuit</option>
            <option value="multiple">+1 rêve par nuit</option>
          </select>
          <br />
          <button type="submit" className="submit-button mb-6" disabled={loading}>
            S'inscrire
          </button>
          <p>
            Vous êtes déjà inscrit ?{" "}
            <Link href={"/login"} className="inline-link">
              Se connecter
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

export default RegisterUI;
