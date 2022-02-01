import React from 'react';
import {Car} from "../Car/Car";
import {useSelector} from "react-redux";

const Cars = ({getCarId}) => {

    const {cars} = useSelector(state => state['carReducer']);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} getCarId={getCarId}/>)}
        </div>
    );
};

export {Cars};