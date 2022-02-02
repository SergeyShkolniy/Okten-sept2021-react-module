import React from "react";
import {useDispatch} from "react-redux";

import {deleteAllTasks, deleteDoneTasks} from "../../store";
import css from "./DeleteAll.module.css"

const DeleteAll = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.deleteFlex}>
            <button className={css.button} onClick={()=> dispatch(deleteDoneTasks())}>Delete done tasks</button>
            <button className={css.button} onClick={()=> dispatch(deleteAllTasks())}>Delete all tasks</button>
        </div>
    );
};

export {DeleteAll};