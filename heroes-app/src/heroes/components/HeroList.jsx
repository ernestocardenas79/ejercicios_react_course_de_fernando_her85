import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList= ({publisher})=>{
    const heroesList = getHeroesByPublisher(publisher);
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
             {heroesList.map(h=> (<HeroCard  key={h.id} {...h}></HeroCard>))}

        </div>
    )
}