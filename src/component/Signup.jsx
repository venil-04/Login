import React from 'react'

const Signup = () => {
  return (
    <div>
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
    </div>
  )
}

export default Signup
