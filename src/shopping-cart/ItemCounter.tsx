import { useState } from "react"

// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
    name: string,
    quantity?: number
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity)

    return (<section className={styles.itemRow}>
        <span className={styles["item-text"]} style={{ color: count === 1 ? 'red' : 'pink' }}>{name}</span>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </section>)
}