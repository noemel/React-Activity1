import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => prev - 1);

    return (
        <div className="Counter">
            <div className="button-container">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
                <div className="count">
                    <span className="count-holder">{count}</span>
                </div>
        </div>
    );
}

export default Counter;
