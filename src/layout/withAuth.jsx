import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const withAuth = (Component,generate) => {
    const Authentication =()=>{
        let user;
        if(generate){
            user = Cookies.get('generate-user');
        }
        else{
            user = Cookies.get('verify-user');
        }

        console.log(user);
        const navigate=useNavigate();

        useEffect(()=>{
            if(!user){
                navigate('/')
            }
        },[user])

        return user?<Component/>:<></>;
    }
        return Authentication;
};
export default withAuth
