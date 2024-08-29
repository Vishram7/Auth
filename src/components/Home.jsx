// import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user} = useAuthContext();

  

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      
      {user &&( 
      <div>
        <h1>{user.email}</h1>
        <h3>{user.token}</h3>
      </div>
      )}
      {!user && <h1>No user</h1>}
    </div>
  );
};

export default Home;
