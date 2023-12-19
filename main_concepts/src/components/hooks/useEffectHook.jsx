import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const UseEffectHook = () => {
    const [resourceType, setResourceType] = useState('');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeigth, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${ resourceType }`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return(
    <div className="d-flex flex-column align-items-center">
        <h1>useEffect Hook Demo</h1>
        <ButtonGroup className="mb-2 mt-2" size="lg">
            <Button onClick={() => setResourceType('posts')}>Posts</Button>
            <Button onClick={() => setResourceType('users')}>Users</Button>
            <Button onClick={() => setResourceType('comments')}>Comments</Button>
        </ButtonGroup>
            <Button onClick={() => {
                return(
                    setItems([]),
                    setResourceType('')
                )
            }} variant="danger">Reset</Button>
        <h1>{ resourceType }</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        <div className="mt-4">
            <h1>Window width: {windowWidth} height: {windowHeigth}</h1>
        </div>
    </div>
    )
}

export default UseEffectHook;