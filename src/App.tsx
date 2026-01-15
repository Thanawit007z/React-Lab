import React from "react";
import Pre01 from "./page/Pre01";
import { BrowserRouter , Routes , Route } from "react-router-dom";


const userDetail = {
  username : 'thanawit' ,
  role : 'admin'
}

export const userProfile = React.createContext<any>(null)

function App() {




  return (
<>
<userProfile.Provider value={userDetail}>
  <BrowserRouter>
    <Routes>
      <Route path="/home" element ={<Pre01 />} />
    </Routes>
  </BrowserRouter>
</userProfile.Provider>
</> 
 )
}

export default App
