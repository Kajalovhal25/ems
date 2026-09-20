import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmplyoyeeDashboard from "./components/Dashboard/EmplyoyeeDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  
  const [user, setUser] = useState(null);

  const handleLogin =(email,password)=>{  
    if (email =='admin@me.com' && password == '123'){
      setUser('admin');
    }else if(email == 'employee@me.com' && password == '123'){
      setUser('employee');
    }else{
    alert('Invalid credentials');
    }
  handleLogin('admin@me.com', '123');

  const date = useContext(AuthContext);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {user == 'admin' ? <AdminDashboard /> : <EmplyoyeeDashboard />}
    </>
  );
  };
};
export default App;