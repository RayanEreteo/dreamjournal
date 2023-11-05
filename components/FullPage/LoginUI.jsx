"use client";

import Link from "next/link";
import { useState } from "react";

function LoginUI() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="login-wrapper w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="form-container bg-white rounded h-[350px] p-6 flex items-center justify-center text-center">
        <form action="">
          <div className="input-fields flex flex-col">
            <input
              className="input-field"
              type="email"
              placeholder="Votre email...."
              required
            />
            <hr />
            <input
              className="input-field"
              type="password"
              placeholder="Votre mot de passe...."
              required
            />
            <br />
          </div>
          <button type="submit" className="submit-button mb-6">
            Se connecter
          </button>
          <p>
            Aucun compte ?{" "}
            <Link href={"/register"} className="inline-link">
              S'inscrire
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginUI;
