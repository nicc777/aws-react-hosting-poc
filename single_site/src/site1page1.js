import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Page1 = () => {
    return (
        <React.Fragment>
            <p>This is Site 1 Page 1</p>
            <br />
            <hr />
            <br />
            <Link to="/home">Site 1 Home</Link>
        </React.Fragment>
    );
}

export default Page1;