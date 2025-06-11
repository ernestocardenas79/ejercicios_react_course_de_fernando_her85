import { heroes } from "./data/data"
import { HeroesCard } from "./heroeCard";

export const HeroesContainer = ({asociacion})=>{
    const heroesList = heroes.filter(h=>h.publisher === asociacion);
    
    return (
        <ul>
            {heroesList.map(h=> (<HeroesCard  key={h.id} {...h}></HeroesCard>))}
        </ul>
    )
}