import { HeroesList } from "../components"

export const DCPage = ()=>{
    return ( <>
        <h1>DC Page</h1>      
        {/* <HeroesContainer asociacion="DC Comics" /> */}
        <HeroesList publisher="DC Comics"></HeroesList>

      </>
    )
}