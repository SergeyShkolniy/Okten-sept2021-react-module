import React from 'react';


const Car = ({car,getCarId}) => {
    const {id, model, price, year} = car

    return (
        <div>
            <div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <button onClick={()=> getCarId(id)}>delete</button>
        </div>
    );
};

export {Car};