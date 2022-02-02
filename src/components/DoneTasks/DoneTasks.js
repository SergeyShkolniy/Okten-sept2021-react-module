import React from "react";
import {useSelector} from "react-redux";

import css from "./DoneTasks.module.css"

const DoneTasks = () => {

    const {tasks} = useSelector(state => state.tasks);
    const doneTasks = tasks.filter((task)=>task.status === true)

    return (
        <div>
            <div className={css.block}>Done tasks : {doneTasks.length}</div>
        </div>
    );
};

export {DoneTasks};