import type { CSSProperties } from "react"

const firstName = 'Ernesto'
const lastName = 'Cardenas'
const favoritesGames = ['Elder Ring', 'Smash', 'Metal Gear']
const isActive = true
const address = {
    zipcode: 2341
}

const myStyles: CSSProperties = { color: 'white', backgroundColor: 'orange', borderRadius: 10, padding: 10 }


export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoritesGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}
            >{JSON.stringify(address)}</p>
        </>
    )
}
