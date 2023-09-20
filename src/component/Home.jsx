import React from "react";
import withAuth from "../layout/withAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Cookies from "js-cookie";

const Home = () => {
  
  const user = JSON.parse(Cookies.get("generate-user"))
  const navigate = useNavigate();

  const handelclick = (generate) => {

    if(generate){

        navigate("/GenerateCertificate");
    }
    else{
        navigate('/VerifyCertificate')
    }

  };
  return (
  
    <>
        <Navbar photourl={user.photo}/>
    </>
  );
};

export default withAuth(Home);
