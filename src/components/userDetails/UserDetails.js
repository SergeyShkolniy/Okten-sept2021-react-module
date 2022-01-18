import './UserDetails.css'

const UserDetails = ({user, getUserId}) => {

const {id, name, email, address:{city, street}, phone, website, company} = user

    return (
        <div className={'userDetails-flex'}>
            <div><b>{id}:</b> {name}</div>
            <div><b>email:</b> {email}</div>
            <div><b>address:</b> {city} / {street}</div>
            <div><b>phone:</b> {phone}</div>
            <div><b>website:</b> {website}</div>
            <div><b>company:</b> {company.name}</div>
            <button onClick={() => getUserId(id)}> Get Posts</button>
        </div>
    );
};

export default UserDetails;