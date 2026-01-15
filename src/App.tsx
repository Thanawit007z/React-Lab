import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./page/Dashboard";
import { UserProfile } from "./component/UserProfile";
import Pre01 from "./page/Pre01";

import React from "react";

interface userType {
  username : string;
  role : string;
}

const userData : userType = {
  username : 'thanawit' ,
  role : 'admin'
}

export const userContext = React.createContext<userType | null >(null)

function App() {


  return (
<>

<userContext.Provider value={userData}>
<BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/pre01" element ={<Pre01 />}> </Route>
      </Routes>
    </BrowserRouter>
</userContext.Provider>
</> 
 )
}

export default App
