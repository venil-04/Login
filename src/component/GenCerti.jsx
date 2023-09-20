import React from 'react'
import { useNavigate } from 'react-router-dom'
import withAuth from '../layout/withAuth'

const GenCerti = () => {

    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-screen space-x-5'>
      <div className='bg-purple-400 p-20 text-3xl rounded-lg font-medium text-white ' onClick={()=>{navigate('/GenerateCertificate/organization')}}>As a Institution</div>
      <div className='bg-purple-400 p-20 text-3xl rounded-lg font-medium text-white ' onClick={()=>{navigate('/GenerateCertificate/government')}}>As a Government</div>
    </div>
  )
}

export default withAuth( GenCerti)
