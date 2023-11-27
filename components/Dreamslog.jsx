function Dreamslog({ dream, day, islucid,deleteDream, id }) {

  return (
    <div className={`dreamlog sm:w-[430px] mb-3 border-solid border-2 ${islucid ? "border-purple-500" : "border-sky-500"} w-[330px] m-auto text-center`}>
        <h1>{dream}</h1>
        <hr />
        <p>{day}</p>
        <hr />
        <button className="text-red-500" onClick={() => deleteDream(id)}>Supprimer</button>
    </div>
  )
}

export default Dreamslog