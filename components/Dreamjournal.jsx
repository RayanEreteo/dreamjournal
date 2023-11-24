"use client";

import { useState } from "react";
import Dreamslog from "./Dreamslog";

function Dreamjournal({ authToken }) {
  const [dreams, setDreams] = useState([]);

  const [loading, setloading] = useState(false);
  const [serverResponse, setserverResponse] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setloading(true);

    const formData = {
      dream_record: e.target.dream_record.value,
      islucid: e.target.islucid.value,
    };

    fetch("http://localhost:5000/create_dream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authToken
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setserverResponse(data);
        if(data.success){
          window.location.reload()
        }
        setloading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div className="dreamjournal w-[800px] min-h-[800px] m-auto bg-white relative top-[10vh] rounded">
      <div className="form-container">
        <h1 className="text-4xl text-center mb-2 ">Journal des rêves</h1>
        <hr />
        <br />
        <form className="flex items-center justify-center text-center flex-col" onSubmit={handleSubmit}>
          <textarea
            placeholder="De quoi avez-vous rêver cette nuit ?"
            name="dream_record"
            id="dream_record"
            cols="30"
            rows="10"
            className="border-solid border-2 border-sky-500 rounded w-[530px] resize-none"
            required
          ></textarea>
          <br />
          <label htmlFor="islucid">Rêve lucide ?</label>
          <input type="checkbox" name="islucid" id="islucid" />
          <br />
          <button
            type="submit"
            className="p-2 mb-2 rounded bg-sky-500 text-white"
            disabled={loading}
          >
            Ajouter
          </button>
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
