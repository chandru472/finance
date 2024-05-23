import React from 'react'

import { Routes,Route,Navigate } from 'react-router-dom'

import Home from './Components/Home'
import Main from './Components/Items/Main'
import Items from './Components/Items/Items'
import SignUp from './Components/sign in/up/SignUp'
import SignIn from './Components/sign in/up/SignIn'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/items' element={<Items/>} />
      <Route path='/sales' element={<Items/>} />
      <Route path='/backtomain' element={<Main/>} />
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Signin' element={<SignIn/>}/>
      <Route path='/backtosignin' element={<SignIn/>}/>
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  )
}

export default App