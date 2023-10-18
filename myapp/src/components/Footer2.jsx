import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
export default function Footer2() {

    return (
        <>
            
            <div className="main" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20rem', backgroundColor: '#5e3ad4', height: '60rem' }}>
                <div className="left" style={{ display: 'flex', flexDirection: 'column', marginTop: '10rem' }}>
                    <h2 style={{ fontWeight: 800, fontSize: '2.5rem' }}>Let's Get Moving</h2>
                    <h5 style={{ fontWeight: 300 }}>Sign Up For Updates</h5>
                    <label style={{ fontWeight: 200, fontSize: '1.2rem', marginTop: '1.5rem' }}>Full Name</label>
                    <input type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', borderBottom: ".2rem solid white" }} />
                    <div className='info' style={{ marginTop: '1.5rem', display: 'flex', flexDirection: "row", }}>
                        <label>Email</label>
                        <input type="email" style={{ backgroundColor: 'transparent', lineHeight: '3rem', marginLeft: '-2.5rem', border: 'none', outline: 'none', borderBottom: ".2rem solid orange" }} />
                        <label>Phone</label>
                        <input type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', borderBottom: ".2rem solid white" }} />
                    </div>
                    <label style={{ marginTop: '2rem' }}>Type your message here...</label>
                    <input type="text" style={{ backgroundColor: 'transparent', marginTop: '3rem', border: 'none', outline: 'none', borderBottom: ".2rem solid white" }} />
                    <button style={{ backgroundColor: 'transparent', border: 'none', marginTop: '2rem', marginLeft: '10rem' }}>submit</button>
                </div>
                <div className="mid" style={{ display: 'flex', flexDirection: 'column', marginTop: '10rem' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 700, borderBottom: '.2rem solid white' }}>77 Rajiv nager Bhopal  <br />
                        Bharat, 462022 <br />
                        Email: fitney@7067.com</p>
                    <h6 style={{ marginTop: '2rem' }}>Tel: 123-456-7890 <span>I</span><span> Fax: 123-456-7890</span></h6>
                    <Link to='/joinclass' style={{ textDecoration: 'none', fontSize: '1.5rem' }}> <button style={{ backgroundColor: 'transparent', border: '.1rem solid white ', marginTop: '1.5rem', padding: '.5rem' }}>Book trial class now </button></Link>
                </div>
                <div className="right" style={{ display: 'flex', flexDirection: 'column', marginTop: '10rem' }}>
                    <ul style={{ listStyle: 'none', fontSize: '1.5rem', fontWeight: 300, lineHeight: "2.5" }}>
                        <Link to ='/' style={{textDecoration:'none',color:'white'}}><li>Home</li></Link>
                        <Link to ='/about' style={{textDecoration:'none',color:'white'}}><li>About</li></Link>
                        <Link to ='/classes' style={{textDecoration:'none',color:'white'}}><li>Classes</li></Link>
                        <Link to ='/workout' style={{textDecoration:'none',color:'white'}}><li>Workouts</li></Link>
                        <Link to ='/plan' style={{textDecoration:'none',color:'white'}}><li>Plan</li></Link>
                        <Link to ='/contact' style={{textDecoration:'none',color:'white'}}><li>Contact</li></Link>
                        <Link to ='/shop' style={{textDecoration:'none',color:'white'}}><li>Shop</li></Link>
                    </ul>
                    <div className='icons' style={{ marginLeft: '2rem', display: 'flex', gap: '.5rem', fontSize: '1.2rem' }}>
                    <Link to ='/' style={{color:'white'}} ><i class="fa-brands fa-youtube"></i></Link>
                    <Link to ='https://instagram.com/aayushmandve?igshid=NzZlODBkYWE4Ng==' style={{color:'white'}} ><i class="fa-brands fa-instagram"></i></Link>
                    <Link to ='https://www.facebook.com/ayush.mandve.1?mibextid=ZbWKwL' style={{color:'white'}} ><i class="fa-brands fa-facebook"></i></Link>

                    </div>
                </div>
            </div>

        </>
    )
}
