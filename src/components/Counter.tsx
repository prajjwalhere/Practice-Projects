import React, {useState} from "react";


const Counter: React.FC = () => {
    const[count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };

    const reset = () => {
        setCount(0);
    }

    return(
        <div>

        <div className="counter-container">
        <h1> Count is {count}</h1>
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        <button className="btn" onClick={reset}>Reset</button>
        </div>

        </div>
    );

};

export default Counter;