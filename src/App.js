import './App.css'
import {useState} from "react";
import {Cars, Form} from "./components";


const App = () => {

    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, {id: new Date().getTime(), ...data}])
    }
    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id))
    }
    return (
        <>
            <Form getFormData = {getFormData}/>
            <Cars cars = {cars} getCarId={getCarId}/>

        </>
    );
};

export default App;