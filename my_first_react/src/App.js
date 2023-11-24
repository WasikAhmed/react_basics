import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import DetailCard from "./components/DetailCard";

const App = () => {
    const [showDetailCard, setShowDetailCard] = useState(false);

    return (
        <div className="App">
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                <h1 className="mb-4 text-center">Hello, React</h1>
                <h6 className="mb-2 text-center">Click the button to view my details</h6>
                <div className="d-flex justify-content-center align-items-center">
                    <Button type="button" className="btn btn-dark mb-4" onClick={() => setShowDetailCard(true)}>
                        CLICK ME
                    </Button>
                </div>
                { showDetailCard ? (
                    <>
                        <DetailCard id='22-47698-2' name='Wasik Ahmed' dept='CSE' age={22} />
                        <Button type="button" className="btn btn-danger mt-2" onClick={() => setShowDetailCard(false)}>
                            CLOSE
                        </Button>
                    </>
                    ) : null} 
                
            </div>
        </div>
    );
}

export default App;