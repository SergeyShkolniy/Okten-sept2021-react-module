import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from './Form.module.css'
import {addTask} from "../../store";

const Form = () => {

    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTask({data}))
        reset()
    }

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)} className={css.formFlex}>
                <input type='text' placeholder='New Todo' className={css.formInput} {...register('newTodo')}/>
                <button className={css.formButton}>Add new task</button>

            </form>
        </div>
    );
};

export {Form};