import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type = 'text' {...register('model')}/></label>
            <label>Price: <input type = 'text' {...register('price')}/></label>
            <label>Year: <input type = 'text' {...register('year')}/></label>
        </form>
    );
};

export {Form};