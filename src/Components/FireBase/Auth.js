import React, { useState } from 'react';
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Auth = () => {
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setUser({});
            })
    }

    return (
        <div>
            {
                user.email ? <button onClick={handleSignOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Google Sign In</button>
            }
            <hr />
            <h3>Name:{user.displayName}</h3>

        </div>
    );
};

export default Auth;