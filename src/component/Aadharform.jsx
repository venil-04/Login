import React from "react";
import { useNavigate } from "react-router-dom";

const Aadharform = () => {
    const navigate=useNavigate();
  return (
    <div class="flex items-center justify-center h-screen  bg-purple-500 ">
      <form
        className="bg-gray-50 p-20 w-[40%] h-screen rounded-lg"
        action="post"
        onSubmit={() => {
          navigate("/cid");
        }}
      >
        <h1 className="text-xl font-medium mb-10 underline text-center">
          Enter Aadhar card detail
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor=" aadharNumber"
          >
            Aadhar Number:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="aadharNumber"
            placeholder="Enter Aadhar Number"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            full name:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            DOB:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="date"
            id="dob"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address:
          </label>
          <textarea
            className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="address"
            rows="3"
            placeholder="Enter Address"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender:
          </label>
          <select class="form-control" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
        <label htmlFor="contactNumber " className="block text-gray-700 text-sm font-bold mb-2">Contact Number:</label>
        <input type="tel" className="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" id="contactNumber" placeholder="Enter Contact Number"/>
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
  );
};

export default Aadharform;
