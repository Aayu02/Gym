import React from 'react'
import Navbar from '../components/Navbar'

export default function Workout() {
  return (
    <>
    <Navbar/>
      <div className='main' style={{backgroundColor:'#5e3Ad4', display:'flex',flexDirection:'column', justifyContent:'center' ,alignItems:'center',height:'50rem'}}>
        <h1 style={{fontSize:'4rem',fontWeight:700}}>Our challenges</h1>
        <p style={{fontSize:'1.3rem'}}>Step by step challenges to keep you strong <br />
           <span style={{marginLeft:'7rem'}}>and motivated.</span>  </p>
           <div className="cont" style={{width:'50rem',height:'20rem', marginTop:'6rem',backgroundColor:'white', color:'black',display:'flex', justifyContent:'center',alignItems:'center'}}>
            <h4>No Available Programs</h4>
           </div>
      </div>
    </>
  )
}
