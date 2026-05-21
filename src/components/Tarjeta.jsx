
function Tarjeta({imagen, nombre, profesión}) {
  return (
    <div>
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <h3>trabajo como {profesión}</h3>
    </div>
  )
}

export default Tarjeta