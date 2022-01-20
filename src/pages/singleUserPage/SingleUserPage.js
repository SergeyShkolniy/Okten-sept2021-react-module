import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userServices} from "../../services/user.service";
import css from "./SingleUserPage.module.css";


const SingleUserPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    
    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        userServices.getById(id).then(value => setUser({...value}))

    }, [id])

    return (
        <div>

            {user && (
                <div className={css.main}>
                    <h3>User details</h3>
                    <ul>
                        <li><b>id: </b>{user.id}</li>
                        <li><b>name: </b>{user.name}</li>
                        <li><b>username: </b>{user.username}</li>
                        <li><b>email: </b>{user.email}</li>
                        <ul><b>address:</b>
                            <li><b>suite: </b>{user.address.suite}</li>
                            <li><b>city: </b>{user.address.city}</li>
                            <li><b>zipcode: </b>{user.address.zipcode}</li>
                            <li><b>street: </b>{user.address.street}
                                <ul><b>geo:</b>
                                    <li><b>lat: </b>{user.address.geo.lat}</li>
                                    <li><b>lng: </b>{user.address.geo.lng}</li>
                                </ul>
                            </li>
                        </ul>
                        <li><b>phone: </b>{user.phone}</li>
                        <li><b>website: </b>{user.website}</li>
                            <ul><b>company:</b>
                                <li><b>name: </b>{user.company.name}</li>
                                <li><b>lng: </b>{user.company.catchPhrase}</li>
                                <li><b>lng: </b>{user.company.bs}</li>
                            </ul>
                    </ul>

                    <Link to={'posts'}><button>All posts on the user</button></Link>
                </div>

            )}

            <Outlet/>

        </div>
    );
};

export default SingleUserPage;