import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import withAuth from '../layout/withAuth'

const VerifyCerti = () => {

    
  const user = JSON.parse(Cookies.get("verify-user"))
    

  const accessToken = Cookies.get('verify-user-access-token');
  const navigate = useNavigate();
  
  useEffect(()=>{
      if(!accessToken){    
        navigate('/')
      }
    },[])


  return (
    <div>
        <Navbar photourl={user.photo}/>
      <h1 className='text-6xl'>verify Certificate</h1>
    </div>
  )
}

export default withAuth(VerifyCerti,false)
