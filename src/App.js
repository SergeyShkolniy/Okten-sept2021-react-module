import './App.css'
import {useState} from "react";
import {Cars, Form} from "./components";


const App = () => {

    const [cars, setCars] = useState([]);


    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }
    return (
        <>
            <Form/>
            <Cars getCarId={getCarId}/>

        </>
    );
};

export default App;