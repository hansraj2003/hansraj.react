import React, {useContext} from 'react';
import UserContext from '../Context/UserContext';
function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <>Please Login</>

    return <>Welcome {user.username}</>
}

export default Profile;