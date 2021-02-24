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
            <br />
            <a href="/site2/index.html">Site2 Home</a>
            {/* <Link to="/site2" replace></Link> */}
            <br />
            <a href="/site2/page1">Site2 Page 1</a>
            {/* <Link to="/site2/page1" replace>Site 2 Page 1</Link> */}
        </React.Fragment>
    );
}

export default Page1;