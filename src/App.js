import "./App.css"
import {AllTasks, DeleteAll, DoneTasks, Form, TodoList, TodoTasks} from "./components";

const App = () => {
    return (
        <div className={'wrapper'}>
            <h2>~ TO DO LIST ~</h2>
            <Form/>
            <div className={'infoTasks'}><AllTasks/><DoneTasks/><TodoTasks/></div>
            <TodoList/>
            <DeleteAll/>
        </div>
    );
};

export default App;