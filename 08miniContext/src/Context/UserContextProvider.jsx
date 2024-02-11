import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log({user, setUser});
    console.log({children});
    return (
        <UserContext.Provider value={{user, setUser}}>
         {children }
        </UserContext.Provider>
    )
    
}

export default UserContextProvider;