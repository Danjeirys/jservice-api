import { useState } from 'react'

export default function Score(props) {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 100);
    }

    const handleDecrement = () => {
        setCount(count - 100)
    }

    const handleReset = () => {
        setCount(count - count)
    }

    return (

        <div>
            <h2>Score: {count}</h2>
            <button className='decrease' onClick={handleDecrement}>Decrease</button>
            <button className='increase' onClick={handleIncrement}>Increase</button>
            <button className='reset' onClick={handleReset}>Reset</button>
        </div>
    )
}