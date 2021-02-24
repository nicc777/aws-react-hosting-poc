import React from 'react';
import {
    Link
} from "react-router-dom";


const Page1 = () => {
    return (
        <React.Fragment>
            <p>This is Site 2 Page 1</p>
            <br />
            <hr />
            <br />
            <Link to="/home">Site 2 Home</Link>
            <br />
            <a href="/site1/index.html">Site1 Home</a>
            {/* <Link to="/site2" replace></Link> */}
            <br />
            <a href="/site1/page1">Site1 Page 1</a>
            {/* <Link to="/site2/page1" replace>Site 2 Page 1</Link> */}
        </React.Fragment>
    );
}

export default Page1;