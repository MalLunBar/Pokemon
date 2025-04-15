const Card = ({ name, weight }) => {
  return (
    <>
      <article>

        <h2>{name}</h2>
        <p>{weight}</p>
      </article>
    </>
  )
}

export default Card