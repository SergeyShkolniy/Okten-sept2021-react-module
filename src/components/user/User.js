import './User.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (

        <div className={'wrapper'}>
            <div className={'user'}>

                <div>{id}) {name}</div>
                <button onClick={() => getUser(user)}> Get Details</button>

            </div>
        </div>

    );
};

export default User;