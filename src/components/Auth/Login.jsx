import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Email is",email);
    console.log("Password is",password);

    setEmail('');
    setPassword('');
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-6 m-6">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}className="flex flex-col items-center gap-4 p-10">
          <input required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
            className="w-64 border-2 border-emerald-500 rounded-full bg-transparent py-2 px-4 outline-none placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
            className="w-64 border-2 border-emerald-500 rounded-full py-2 px-4 outline-none placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-64 bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;