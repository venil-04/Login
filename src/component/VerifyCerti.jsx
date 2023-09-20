import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import withAuth from "../layout/withAuth";
import Verifygov from "./Verifygov";

const VerifyCerti = () => {
  const user = JSON.parse(Cookies.get("generate-user"));

  const accessToken = Cookies.get("generate-user-access-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, []);


  const [org, setorg] = useState({ orgtype: "", doctype: "" });
  const handelChange = (e) => {
    setorg({ ...org, [e.target.id]: e.target.value });
  };

  const handelclick=()=>{
    if(org.orgtype==='Government Organization'){
      navigate('gov-verification')
    }
    else{
      navigate('org-verification')
    }
  }

  return (
    <div>
      <Navbar photourl={user.photo} />

      {/* select button for Organization Type */}
      <div className="relative flex space-x-5 mt-5 ">
        <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
          Select Organization Type
        </div>
        <select
          className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="orgtype"
          onChange={handelChange}
        >
          <option value="">Select an option</option>
          <option value="Study Institute">Study Institute</option>
          <option value="Private Organization">Private Organization</option>
          <option value="Government Organization">
            Government Organization
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* select button for Document type */} 
      {org.orgtype === "Government Organization" ? (
        <div className="relative flex space-x-5 mt-5 ">
          <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
            Select Organization Type
          </div>
          <select
            className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="doctype"
            onChange={handelChange}
          >
            <option value="">Select an option</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="Pan card">Pan card</option>
            <option value="Licence">Licence</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="relative flex space-x-5 mt-5 ">
          <div className="bg-blue-400 p-4 rounded-lg text-white font-medium">
            Select Organization Type
          </div>
          <select
            className="block appearance-none w-[20%] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="doctype"
            onChange={handelChange}
          >
            <option value="">Select an option</option>
            <option value="Course Degree">Course Degree</option>
            <option value="Result">Result</option>
            <option value="Program Certification">Program Certification</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}

      <button className="bg-blue-400 p-4 rounded-lg text-white font-medium mt-5" onClick={handelclick}>Go to verification</button>
    </div>
  );
};

export default withAuth(VerifyCerti, false);
