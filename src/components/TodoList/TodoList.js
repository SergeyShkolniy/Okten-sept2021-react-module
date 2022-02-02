import React from "react";
import {useSelector} from "react-redux";

import css from "./TodoList.module.css"
import {Task} from "../Task/Task";

const TodoList = () => {

    const {tasks} = useSelector(state => state.tasks);

    return (
        <div className={css.minHeight}>
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    );
};

export {TodoList};