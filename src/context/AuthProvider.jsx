import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
import { createContext } from 'react';

export const AuthContext  = createContext();

const AuthProvider = ({ children }) => {
    
    
    const [userData, setuserData] = useState(null)
    useEffect(()=>{
        
    console.log(EmplyoyeeDashboard,admin) = getLocalStorage()
    setuserData({employee,admin})
    },[])

  return (
    <div>
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
