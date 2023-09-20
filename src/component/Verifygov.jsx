import React from 'react'
import { useNavigate } from 'react-router-dom'

const Verifygov = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen  bg-purple-500 ">
    <form className="bg-gray-50 p-40 w-[40%] h-[90%] rounded-lg" action="post" onSubmit={()=>{navigate('/cid')}}>
      <h1 className="text-xl font-medium mb-10 underline text-center">Verify A Document</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor=" docid"
        >
          Document Id:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          id="docid"
          name="docid"
          required
        />
      </div>
         
      <div className="mb-4 flex justify-center">
        <button
          className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Verifygov
