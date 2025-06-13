import { useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const HeroSearch = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = querystring.parse(location.search);
    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const showAlertSearchHero = q.length !== 0;
    const showNoResults = heroes.length === 0 && q.length > 0;

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${searchText}&asc=true`);
    };

    return (
        <>
            <h1> Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search a hero"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {q === '' ? (
                        <div className="alert alert-primary">Search a hero</div>
                    ) : (
                        heroes.length === 0 && (
                            <div className="alert alert-danger">
                                No hero with {q}
                            </div>
                        )
                    )} */}

                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showAlertSearchHero && 'none' }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{
                            display: showNoResults ? '' : 'none',
                        }}
                    >
                        No hero with {q}
                    </div>

                    {heroes.map((h) => (
                        <HeroCard key={h.id} {...h}></HeroCard>
                    ))}
                </div>
            </div>
        </>
    );
};
