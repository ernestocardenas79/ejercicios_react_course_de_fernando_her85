import { Link } from "react-router-dom"

export const HeroesCard = ({id, superhero,alter_ego, characters, first_appearance})=>{
    
    return (
        <div className="col-8">
            <div className="card-body">
                <img src={`assets/heroes/${id}.jpg`} alt={superhero} />
                <h5 className="card-title">{superhero}</h5>
                <h7 className="card-text">{alter_ego}</h7>
                {
                    (alter_ego !== characters) && (<p>{characters}</p>)
                }

                <p className="card-text">
                    <small>{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                    Mas...
                </Link>
            </div>
        </div>
        
    )
}