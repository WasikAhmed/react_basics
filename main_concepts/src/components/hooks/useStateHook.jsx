import { useState } from "react";
import { Button } from "react-bootstrap";

const UseStateHook = () => {
    // const [state, setState] = useState({count: 1, color: 'blue'})
    // const count = state.count
    // const color = state.color
    const [count, setCount] = useState(0);
    const [color, setColor] = useState();

    const decrementCount = () => {
        setCount(prevCount => prevCount-1);
        setColor('Red')
        // setState(prevState => {
        //     return{...prevState, count: prevState.count - 1 }
        // })
    }
    const incrementCount = () => {
        setCount(prevCount => prevCount+1);
        setColor('Blue');
    }

    return (
    <div className="d-flex flex-column align-items-center mt-4">
        <h1 className="mb-4">useStateHook Demo</h1>
        <div className="text-center">
            <Button onClick={decrementCount} variant="primary">-</Button>
            <span>{count}</span>
            <Button onClick={incrementCount} variant="primary">+</Button>
            <h1>Color: {color}</h1>
        </div>
    </div>

    )
}

export default UseStateHook;