import { Link } from "react-router-dom"

export const HeroCard = ({id, superhero,alter_ego, characters, first_appearance})=>{
    
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-glutters">
                    <div className="col-4">
<img className="card-img" src={`assets/heroes/${id}.jpg`} alt={superhero} />
                    </div>
                    <div className="col-8">
<div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <h6 className="card-text">{alter_ego}</h6>
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
                    
                </div>
            </div>
        </div>
    )
}