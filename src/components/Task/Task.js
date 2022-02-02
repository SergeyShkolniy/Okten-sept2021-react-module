import React from "react";
import {useDispatch} from "react-redux";

import {deleteTask, doneTask} from "../../store";
import css from './Task.module.css'

const Task = ({task}) => {

    const {id, newTodo, status} = task

    const dispatch = useDispatch();

    return (
        <div className={css.taskFlex}>
            <div className={status ? css.done : ""}>{newTodo}</div>
            <div className={css.flexButton}>
                <input className={css.inputPointer} type='checkbox' value={status}
                       onChange={() => dispatch(doneTask({id}))}/>
                <button className={css.button} onClick={() => dispatch(deleteTask({id}))}>delete</button>
            </div>
        </div>
    );
};

export {Task};