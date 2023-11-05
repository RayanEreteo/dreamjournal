"use client"

import Link from "next/link";
import { useState } from "react";

function RegisterUI() {
    const [loading, setLoading] = useState(false)

    return (
      <div className="register-wrapper w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="form-container bg-white rounded h-[350px] p-6 flex items-center justify-center text-center">
          <form action="">
            <div className="input-fields flex flex-col">
              <input className="input-field" type="email" placeholder="Votre email...." required />
              <hr />
              <input
                className="input-field"
                type="password"
                placeholder="Votre mot de passe...."
                required
              />
              <br />
            </div>
            <p className="mb-6">Combien de rêves vous souvenez vous par nuit ?</p>
            <select className="dropdown mb-6">
              <option value="">Aucun rêve</option>
              <option value="">très rarement, 1 rêve par nuit</option>
              <option value="">1 rêve par nuit</option>
              <option value="">+1 rêve par nuit</option>
            </select>
            <br />
            <button type="submit" className="submit-button mb-6">S'inscrire</button>
            <p>Vous êtes deja inscrit ? <Link href={"/login"} className="inline-link">Se connecter</Link></p>
          </form>
        </div>
      </div>
    );
  }
  
  export default RegisterUI;