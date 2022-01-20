import {Link} from "react-router-dom";

import css from "./User.module.css"

const User = ({user}) => {

    const {id, name} = user

    return (

        <div className={css.main}>

            <Link to={id.toString()} state={user}>
                {id}) {name}
            </Link>

        </div>
    );
};

export default User;