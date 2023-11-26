"use client";

import { useEffect, useState } from "react";
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
      islucid: e.target.islucid.checked ? true : false,
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

  useEffect(() => {
    if(!authToken) {return}

    fetch("http://localhost:5000/fetch_dreams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authToken
      }    
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDreams(data);
        } else {
          console.error("Error: Data is not an array", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [authToken]);

  function deleteDream(id){
    const formData = {
      dream_id: id,
    }
    console.log(id)

    fetch("http://localhost:5000/delete_dream", {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="dreamjournal max-w-[800px] min-h-[800px] m-auto mt-6 bg-white rounded">
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
          <input type="checkbox" name="islucid" id="islucid" value="true"/>
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
      <div className="dream-records-container mt-6 mb-6">
        {dreams.length <= 0 ? (
          <p className="text-center">Aucun rêve a afficher.</p>
        ) : (
          dreams.map((dream) => {
            return <Dreamslog dream={dream.dream_record} day={dream.date} islucid={dream.islucid} key={dream._id} id={dream._id} deleteDream={deleteDream}/>;
          })
        )}
      </div>
    </div>
  );
}

export default Dreamjournal;
