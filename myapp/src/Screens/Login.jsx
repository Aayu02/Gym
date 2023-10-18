import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='main' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: "#000000", gap: '10rem', }}>
                <div className="lefft">
                    <img src="img/log1.png" alt="logo" />
                </div>
                <div className="right" style={{ display: 'flex', flexDirection: 'column', marginLeft: '' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '700' }}>Welcome back!</h1>
                    <h3 style={{ fontWeight: '300' }}>Login to continue</h3>
                    <label style={{ marginTop: '4rem', fontSize: '1.5rem', fontWeight: '500' }}>Username</label>
                    <input type="text" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                    <label style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: '500' }}>Password</label>
                    <input type="text" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                     <div>
                     <button style={{marginTop:'2rem',width:"10rem",border:'.1rem solid white',backgroundColor:'transparent',borderRadius:'.8rem',padding:'.2rem',textAlign:'center'}}>Login</button>
                    <Link to="/signup"><button style={{marginTop:'2rem',width:"10rem",border:'.1rem solid white',backgroundColor:'transparent',borderRadius:'.8rem',padding:'.2rem',textAlign:'center',marginLeft:'4rem'}}>signup</button></Link> 

                     </div>

                </div>

            </div>
        </>
    )
}

export default Login
