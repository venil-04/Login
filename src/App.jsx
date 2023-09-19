import { Route,Routes } from "react-router-dom"
import Login from "./component/Login"
import GenerateCerti from "./component/GenerateCerti"
import PrivateRoute from "./component/PrivateRoute"
import VerifyCerti from "./component/VerifyCerti"


function App() {
 

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/GenerateCertificate" element={<GenerateCerti/>}/>
        <Route exact path="/verifyCerti" element={<VerifyCerti/>}/>
      </Routes>
    </>
  )
}

export default App
