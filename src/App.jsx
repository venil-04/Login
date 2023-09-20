import { Route,Routes } from "react-router-dom"
import Login from "./component/Login"
import Home from "./component/Home"
import GenerateCerti from "./component/GenerateCerti"
import GenCerti from "./component/GenCerti"
import VerifyCerti from "./component/VerifyCerti"
import Form from "./component/Form"
import Certificate from "./component/Certificate"
import Org from "./component/Org"
import Gov from "./component/Gov"
import Verifygov from "./component/Verifygov"
import Verifyorg from "./component/Verifyorg"
import Aadharform from "./component/Aadharform"
import Panform from "./component/Panform"

function App() {
 

  return (
    <>

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/GenerateCertificate" element={<GenCerti/>}/>
        <Route exact path="/GenerateCertificate/organization" element={<Org/>}/>
        <Route exact path="/GenerateCertificate/government" element={<Gov/>}/>
        <Route exact path="/GenerateCertificate/government/aadhardetail" element={<Aadharform/>}/>
        <Route exact path="/GenerateCertificate/government/pandetail" element={<Panform/>}/>
        <Route exact path="/VerifyCertificate" element={<VerifyCerti/>}/>
        <Route exact path="/VerifyCertificate/gov-verification" element={<Verifygov/>}/>
        <Route exact path="/VerifyCertificate/org-verification" element={<Verifyorg/>}/>
        <Route exact path="/GenerateCertificate/form" element={<Form/>}/>
        <Route exact path="/cid" element={<Certificate/>}/>
        
      </Routes>
    </>
  )
}

export default App
