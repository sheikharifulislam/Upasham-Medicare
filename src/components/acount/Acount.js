import React from 'react';
import useAuth from '../../customHook/useAuth';

const Acount = () => {

    const {user} = useAuth();
    const userData = {
        Name: user.displayName,
        Email: user.email,
        Image: user.photoURL,
    }

    const styleUserInfo = {
        textAlign: 'center',
    }

    console.log(userData);

    return (
        <div id="user-info" style={styleUserInfo}>
            <img src={userData.Image} alt="" />
            <p>{userData.Name}</p>
            <small>{userData.Email}</small>
        </div>
    );
};

export default Acount;