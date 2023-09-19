import React, { useState } from 'react'
import GoogleSignIn from './GoogleSignIn'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [user,setuser]=useState({
        "username":"",
        "email":"",
        "password":""
    })

    const handleChange = (e) => {
       
        setuser({
          ...user,
          [e.target.id]: e.target.value,
        });
      };

      console.log(user)

  return (
          
        <div className='flex items-center justify-center h-screen  bg-purple-500 ' >
            
            <form className='bg-gray-50 p-40 w-[40%] rounded-lg' action='post'>
                <h1 className='text-4xl text-center'>Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Username:</label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="text" id="username" value={user.username} name="username" onChange={handleChange} required  />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">Email:</label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" type="text" id="email" value={user.email} name="username" onChange={handleChange} required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password:</label>
                <input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={user.password} type="password" id="password" name="password" onChange={handleChange} required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="file">File:</label>
                <input className="w-full px-3 py-2 border  bg-blue-500 rounded-lg focus:outline-none focus:border-blue-500 "  type="file" id="file" name="file"  required/>
            </div>
            <div className="mb-4 text-center ">
                {/* <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" type="submit">Login</button> */}
                <span className='text-sm font-medium'>Login With Google For</span>
            </div>           
            <GoogleSignIn/>
        </form>
        </div>
   
  )
}

export default Login
