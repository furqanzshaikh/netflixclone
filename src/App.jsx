import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes ,Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Acc from './pages/Acc'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {

  
  return (
 <>



<AuthContextProvider>

<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/account' element={<ProtectedRoute><Acc/></ProtectedRoute>} />
</Routes>


</AuthContextProvider>

 </>
  )
}

export default App