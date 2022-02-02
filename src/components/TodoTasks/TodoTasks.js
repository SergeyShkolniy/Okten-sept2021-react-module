import React from "react";
import {useSelector} from "react-redux";

import css from "./TodoTasks.module.css"

const TodoTasks = () => {
    const {tasks} = useSelector(state => state.tasks);

    const todoTasks = tasks.filter((task)=>task.status === false)

    return (
        <div>
            <div className={css.block}>Todo tasks : {todoTasks.length}</div>
        </div>
    );
};

export {TodoTasks};