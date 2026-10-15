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
  const Authdata = useContext(AuthContext);

  useEffect(() => {
    if(Authdata){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [Authdata]);
  

  const handleLogin =(email,password)=>{  
    if (email == 'admin@me.com'&& password == '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(Authdata){
      const employee = Authdata.employees.find((e)=>e.email == email && e.password == password);
      if(employee){
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    }else{
    alert('Invalid credentials');
    }
  handleLogin('admin@me.com', '123');


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmplyoyeeDashboard data={Authdata.employees} /> : null}
    </>
  );
  };
};
export default App;