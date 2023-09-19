import React from 'react'

const Navbar = ({photourl}) => {
    console.log(photourl)
  return (
    <div>
      <div className='bg-purple-400 p-5 text-white flex'>
        <img src={photourl} alt="profile" className='h-10 w-10 rounded-[100%]'/>
      </div>
    </div>
  )
}

export default Navbar
