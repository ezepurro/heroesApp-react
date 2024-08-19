import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import HeroCard from "./HeroCard"

const HeroesList = ({publisher}) => {

  const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( (hero) => (
                <HeroCard
                    key={hero.id}
                    {...hero} />
            ))
        }
    </div>
  )
}

export default HeroesList
