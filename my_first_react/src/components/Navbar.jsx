import React from "react";
import { Navbar as BootStrapNavBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <BootStrapNavBar className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MyApp</a>
                </div>
            </BootStrapNavBar>
        </div>
    );
}

export default Navbar;