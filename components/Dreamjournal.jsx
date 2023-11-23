"use client";

import { useState } from "react";
import Dreamslog from "./Dreamslog";

function Dreamjournal() {
  const [dreams, setDreams] = useState([
    { dream: "test rêve", day: "30 janvier" },
    { dream: "test deuxieme reve", day: "20 fevrier" },
  ]);

  return (
    <div className="dreamjournal w-[800px] min-h-[800px] m-auto bg-white relative top-[10vh] rounded">
      <div className="form-container">
        <h1 className="text-4xl text-center mb-2">Journal des rêves</h1>
        <hr />
        <br />
        <form className="flex items-center justify-center text-center flex-col">
          <textarea
            placeholder="De quoi avez-vous rêver cette nuit ?"
            name="dream_record"
            id="dream_record"
            cols="30"
            rows="10"
            className="border-solid border-2 border-sky-500 rounded w-[530px]"
            required
          ></textarea>
          <br />
          <label htmlFor="islucid">Rêve lucide ?</label>
          <input type="checkbox" name="islucid" id="islucid" />
          <br />
          <button
            type="submit"
            className="p-2 mb-2 rounded bg-sky-500 text-white"
          >
            Ajouter
          </button>
        </form>
      </div>
      <hr />
      <div className="dream-records-container flex flex-col text-center justify-center align-center">
        {dreams.length <= 0 ? (
          <p>Aucun rêve a afficher.</p>
        ) : (
          dreams.map((dream) => {
            return <Dreamslog dream={dream.dream} day={dream.day} />;
          })
        )}
      </div>
    </div>
  );
}

export default Dreamjournal;
