import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
// import '../02-useEffect/effects.css' 

export const MultipleCustomHooks = (url) => {

    const { counter, increment }=useCounter(1);

   const {loading, data }= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   const { author, quote} = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                (
                    <div className="altert alert-info text-center">
                        Loading....
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> {quote}</p>
                <footer className="blockquote-footer">{author} </footer>
                    </blockquote>

                )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}>
                next quote 
            </button>
        </div>
    )
}
