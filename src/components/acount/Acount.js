import React from 'react';
import useAuth from '../../customHook/useAuth';

const Acount = () => {

    const {user} = useAuth();

    return (
        <div>
            <img src={user.photoURL} alt="" />
            <p>{user.displayName}</p>
            <small>{user.email}</small>
        </div>
    );
};

export default Acount;