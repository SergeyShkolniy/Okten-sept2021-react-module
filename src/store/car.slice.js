import {createSlice} from "@reduxjs/toolkit"

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action) => {
        }
    }
})

const carReducer = carSlice.reducer
export const {addCar, deleteCar} = carSlice.actions

export default carReducer