import React from 'react';
import {Link} from "react-router-dom";

const Genre = ({genre}) => {
   const {id, name} = genre

    return (
        <div>
            <Link to={'/genres/' + id}>
            {name}
            </Link>
        </div>
    );
};

export {Genre};