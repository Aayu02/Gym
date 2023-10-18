import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Home from './Screens/Home'
import About from './Screens/About'
import Classes from './Screens/Classes'
import Workout from './Screens/Workout'
import Plans from './Screens/Plans'
import Footer2 from './components/Footer2'
import Shop from './Screens/Shop'
import ScheduleClass from './Screens/ScheduleClass'
import Login from './Screens/Login'
import Signup from './Screens/Signup'

export default function App() {
  return (
    <div>
    <Router>
    <div>
      <Routes>
       
        <Route exact path = "/"element={<Home/>}/>
        <Route exa path='/about'element={<About/>}/>
        <Route exa path='/classes'element={<Classes/>}/>
        <Route exa path='/workout'element={<Workout/>}/>
        <Route exa path='/plan'element={<Plans/>}/>
        <Route exa path='/contact'element={<Footer2/>}/>
        <Route exa path='/shop'element={<Shop/>}/>
        <Route exa path='/joinclass'element={<ScheduleClass/>}/>
        <Route exa path='/login'element={<Login/>}/>
        <Route exa path='/signup'element={<Signup/>}/>

      </Routes>
    </div>
    </Router>
    
    </div>
  )
}
