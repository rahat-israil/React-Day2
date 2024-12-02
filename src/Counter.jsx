import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        const addCount = count + 1;
        setCount(addCount);
    };

    const handleReduceCount = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }
    return (
        <div style={{border: '1px solid red', marginTop: '30px', textAlign:'center'}}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAddCount}>Add Count</button>
            <button onClick={handleReduceCount}>Reduce Count</button>
        </div>
    );
};

export default Counter;