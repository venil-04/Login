import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Cookies from "js-cookie";

const GoogleSignIn = () => {
  const navigate = useNavigate();


  const signInWithGoogle = async (generate) => {
    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(auth, provider);
      console.log("response", res);

      const accessToken = res.user.accessToken;
      const profile = {
        name: res.user.displayName,
        photo: res.user.photoURL,
      };
      // store credential for person who generate certificate

      if(generate){

        Cookies.set("generate-user-access-token", accessToken, { expires: 7 });
        Cookies.set("generate-user", JSON.stringify(profile));
      }
      // credential for verification
      else{

        Cookies.set("verify-user-access-token", accessToken, { expires: 7 });
        Cookies.set("verify-user", JSON.stringify(profile));

      }
      // navigate to the generate certifiaction page after login
      if(generate)
      navigate("/GenerateCertificate");
      else
      navigate("/verifyCerti")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <button onClick={signInWithGoogle}></button>
    // <img src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'} alt="" srcset="" className="h-10 w-10" onClick={signInWithGoogle}/>
    <div className="space-x-4 flex justify-center">
      <button className="bg-blue-600 p-3 rounded-lg text-white font-medium" type="" onClick={()=>{signInWithGoogle(true)} }>
        certificate generation
      </button>
      <button className="bg-blue-600 p-3 rounded-lg text-white font-medium" type="" onClick={()=>{signInWithGoogle(false)}}>
        verify certificate
      </button>
    </div>
  );
};

export default GoogleSignIn;
