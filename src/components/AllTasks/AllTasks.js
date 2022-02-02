import React from "react";
import {useSelector} from "react-redux";

import css from "./AllTasks.module.css"

const AllTasks = () => {
    const {tasks} = useSelector(state => state.tasks);

    return (
        <>
            <div className={css.block}>All tasks : {tasks.length}</div>
        </>
    );
};

export {AllTasks};