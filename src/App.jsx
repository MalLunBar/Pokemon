import pokemon from './data/pokemon.json'
import Card from './components/Card'



export const App = () => {
  return (
    <>
      <h1>Pokemons</h1>

      {pokemon.pokemons.map((poke) => {
        return (
          <Card
            key={poke.id}
            name={poke.name}
            weight={poke.weight} />
        )
      })}
    </>
  )
}


