import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] =useState([]);
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => 
    //        { console.log(data);
    //         setData(data)}
    //         )
    // },[Github])
    return ( 
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git profile pic" width={300}/>
        </div>
     );
}

export default Github;

export const githubInfoLoader = async function() {
   const response = await fetch('https://api.github.com/users/hansraj2003')
    return response.json();
}