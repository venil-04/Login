import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Navbar';
import withAuth from '../layout/withAuth';

const GenerateCerti = () => {

    const user = JSON.parse(Cookies.get("generate-user"))
    const accessToken = Cookies.get('generate-user-access-token');
    const navigate = useNavigate();

    useEffect(()=>{
        if(!accessToken){    
          navigate('/')
        }
      },[])


  return (
    <div>
        <Navbar photourl={user.photo}/>
      <h1 className='text-6xl'>Certification Generation</h1>
    </div>
  )
}

export default  withAuth(GenerateCerti,true)
