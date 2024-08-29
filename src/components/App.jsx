import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// pages & components
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'

function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="components">
          
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> : <Navigate to='/login'/> }
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to='/'/>} 
            />
            <Route 
              path="/register" 
              element={!user ? <Register /> : <Navigate to='/'/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;