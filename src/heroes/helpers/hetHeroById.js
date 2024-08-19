import { heroes } from "../data/heroes"

export const hetHeroById = (id) => {

    return heroes.find( hero => hero.id === id );

}