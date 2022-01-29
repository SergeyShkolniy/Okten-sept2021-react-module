import {useReducer, useRef} from "react";

import './App.css'
import {Cat, Dog} from "./components";

const reducer = (state, action) => {

    switch (action.type) {

        case 'add':
            if (action.target === 'cats') {
                return {...state, cats: [...state.cats, action.payload]};
            }
            else if (action.target==='dogs') {
                return {...state, dogs: [...state.dogs, action.payload]};
            }
            return state;

        case 'delete':
            if (action.target === 'cats') {
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
            }
            else if(action.target==='dogs') {
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
            }
            return state;

        default :
            throw new Error('Error');
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const inputCatValue = useRef();
    const inputDogValue = useRef();

    const addCats = (e) => {
        e.preventDefault();
        const newCat = inputCatValue.current.value;
        dispatch({type: 'add', target: 'cats', payload: {name: newCat, id: new Date().getTime()}});
        inputCatValue.current.value = '';
    };

    const addDogs = (e) => {
        e.preventDefault();
        const newDog = inputDogValue.current.value;
        dispatch({type: 'add', target: 'dogs', payload: {name: newDog, id: new Date().getTime()}});
        inputDogValue.current.value = '';
    }

    return (
        <div className={'container'}>
            <div>
                <form className={'flex'}>
                    <div>
                        <label><b>add Cats</b> <input type="text" name={'cats'} ref={inputCatValue}/></label>
                        <button onClick={addCats}>Save</button>
                    </div>
                    <div>
                        <label><b>add Dogs</b> <input type="text" name={'dogs'} ref={inputDogValue}/></label>
                        <button onClick={addDogs}>Save</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div className={'flex'}>
                <div className={'animals'}>
                    {state.cats.map(cat => <Cat key = {cat.id} cat = {cat} dispatch = {dispatch}/> )}
                </div>

                <div className={'animals'}>
                    {state.dogs.map(dog => <Dog key = {dog.id} dog = {dog} dispatch = {dispatch}/> )}
                </div>

            </div>

        </div>
    );
}

export default App;