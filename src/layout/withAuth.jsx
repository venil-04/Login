import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
    const Authentication =()=>{
     
           const user = Cookies.get('generate-user');

        console.log(user);
        const navigate=useNavigate();

        useEffect(()=>{
            if(!user){
                navigate('/login')
            }
        },[user])

        return user?<Component/>:<></>;
    }
        return Authentication;
};
export default withAuth
