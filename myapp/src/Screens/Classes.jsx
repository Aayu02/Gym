import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


export default function Classes() {
  return (
    <>

        <Navbar/>
       
      <div className='main' style={{backgroundColor:'#5e3ad4' ,height:"60rem"}} >
        <h1  style={{fontSize:"4rem",marginLeft:'40rem' ,padding:'5rem'}}>Our classes</h1>
        <div className="training" style={{display:'flex',flexDirection:'row',padding:'3rem', gap:'20rem' ,justifyContent:'center',borderTop:'.3rem solid white',}}>
            <div className="hiit" style={{marginTop:'2rem'}}>
                <h3 style={{fontWeight:'900'}}>Base HIIT</h3>
            </div>
            <div className="day">
                <p>Mon, Tue, Wed, Thu, Fri, Sat..</p>
                <h5 style={{fontWeight:300}}>45 min</h5>
                <h5 style={{fontWeight:300}}>$35</h5>
            </div>
            <div className='btn'>
                <button style={{backgroundColor:'transparent', border:'none',marginTop:'2rem'}}><Link to='/joinclass' style={{textDecoration:'none',color:'white',fontWeight:400}}>Book now</Link>m</button>
            </div>
        </div>
        <div className="training" style={{display:'flex',flexDirection:'row',padding:'3rem', gap:'20rem' ,justifyContent:'center',borderTop:'.3rem solid white',}}>
            <div className="hiit" style={{marginTop:'2rem',}}>
                <h3 style={{fontWeight:'900'}}>Base Strength</h3>
            </div>
            <div className="day">
                <p>Mon, Tue, Wed, Thu, Fri, Sat..</p>
                <h5 style={{fontWeight:300}}>45 min</h5>
                <h5 style={{fontWeight:300}}>$35</h5>
            </div>
            <div className='btn'>
                <button style={{backgroundColor:'transparent', border:'none',marginTop:'2rem'}}><Link to='/joinclass' style={{textDecoration:'none',color:'white',fontWeight:400}}>Book now</Link></button>
            </div>
        </div>
        <div className="training" style={{display:'flex',flexDirection:'row',padding:'3rem', gap:'20rem' ,justifyContent:'center',borderTop:'.3rem solid white',borderBottom:'.3rem solid white'}}>
            <div className="hiit" style={{marginTop:'2rem'}}>
                <h3 style={{fontWeight:'900'}}>Base Endurance</h3>
            </div>
            <div className="day">
                <p>Mon, Tue, Wed, Thu, Fri, Sat..</p>
                <h5 style={{fontWeight:300}}>45 min</h5>
                <h5 style={{fontWeight:300}}>$35</h5>
            </div>
            <div className='btn'>
                <button style={{backgroundColor:'transparent', border:'none',marginTop:'2rem'}}><Link to='/joinclass' style={{textDecoration:'none',color:'white',fontWeight:400}}>Book now</Link></button>
            </div>
        </div>

      </div>
   
    </>
  )
}
