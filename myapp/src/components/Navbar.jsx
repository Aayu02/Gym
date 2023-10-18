import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'


export default function Navbar() {
    return (
        <div style={{ position: 'sticky', top: '0', backgroundColor: 'black', flex: '1 1 20rem' }}>
            <nav style={{ marginTop: '1.5rem', display: 'flex', marginLeft: '10.2rem' }}>
                <h3 style={{ textTransform: 'capitalize', fontSize: '2.5rem', marginTop: '1.5rem' }}><i className="fa-solid fa-dumbbell" style={{ color: 'blue' }}></i>fitney </h3>
                <div className='list' style={{ display: 'flex', justifyContent: 'space-between', gap: '5.0rem', marginLeft: '10.0rem', marginTop: '1.5rem' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '5rem', fontSize: '1.2rem', fontWeight: 500 }}>
                    <Link to='/'> <li style={{ color: 'blue', textDecoration: 'underline' }}>Home</li></Link>
                    <Link to ='/about' style={{textDecoration:'none',color:'white'}}><li>About</li></Link>
                        <Link to ='/classes' style={{textDecoration:'none',color:'white'}}><li>Classes</li></Link>
                        <Link to ='/workout' style={{textDecoration:'none',color:'white'}}><li>Workouts</li></Link>
                        <Link to ='/plan' style={{textDecoration:'none',color:'white'}}><li>Plan</li></Link>
                        <Link to ='/contact' style={{textDecoration:'none',color:'white'}}><li>Contact</li></Link>
                        <Link to ='/shop' style={{textDecoration:'none',color:'white'}}><li>Shop</li></Link>
                    </ul>
                    <div style={{ marginLeft: '4.0rem', }}>
                    <Link to ='/login' style={{textDecoration:'none',color:'white'}}> <button type='submit' style={{ backgroundColor: 'transparent', border: 'none', fontWeight: 500, fontSize: '1.5rem', }}>Login</button></Link>
                    <Link to ='/signup' style={{textDecoration:'none',color:'white'}}><button type='submit' style={{ marginLeft: '2.0rem', fontSize: '1.5rem', backgroundColor: 'blue', border: 'none', textAlign: 'center', width: '7rem' }}>signup</button></Link>
                    </div>
                </div>
            </nav>
        </div>
        
      
  
    )
}
