import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmplyoyeeDashboard from "./components/Dashboard/EmplyoyeeDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useState } from "react";

function App() {
  
  const [user, setUser] = useState(null);

  const handleLogin =(email,password)=>{  
    if (email =='admin@me.com' && password == '123'){
      console.
    }else if(email == 'employee@me.com' && password == '123'){
      console.log('employee here');
    }else{
    alert('Invalid credentials');
    }
  handleLogin('admin@me.com', '123');

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {/*<EmplyoyeeDashboard />*/}
      {/*<AdminDashboard/>*/}
    </>
  );
  };
};
export default App;