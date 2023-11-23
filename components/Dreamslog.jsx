function Dreamslog({ dream, day }) {
  return (
    <div className="dreamlog mb-3">
        <h1>{dream}</h1>
        <p>{day}</p>
    </div>
  )
}

export default Dreamslog