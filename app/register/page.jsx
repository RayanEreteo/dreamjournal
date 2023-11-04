import React from "react";

export const metadata = {
  title: "Créer un compte",
  description: "Créer un compte DreamKeeper",
  author: "Rayan Ereteo",
};

function Register() {
  return (
    <div className="register-wrapper w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="form-container bg-white rounded h-[300px] flex items-center justify-center text-center">
        <form action="">
          <div className="input-fields flex flex-col">
            <input type="email" placeholder="Votre email...." required />
            <input
              type="password"
              placeholder="Votre mot de passe...."
              required
            />
          </div>
          <p>Combien de rêves vous souvenez vous par nuit ?</p>
          <select>
            <option value="">Aucun rêve</option>
            <option value="">très rarement, 1 rêve par nuit</option>
            <option value="">1 rêve toute les nuits</option>
            <option value="">+1 rêve par nuit</option>
          </select>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
