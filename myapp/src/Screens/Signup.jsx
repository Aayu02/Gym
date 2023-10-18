import React from 'react'

const Signup = () => {
  return (
    <>
     <div className='main' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: "#000000", gap: '10rem', height:'60rem'}}>
                <div className="lefft">
                    <img src="img/s12.png" alt="logo" />
                </div>
                <div className="right" style={{ display: 'flex', flexDirection: 'column', marginLeft: '' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '700' }}>Welcome to <span style={{color:'blue'}}>Fitney</span></h1>
                    <h3 style={{ fontWeight: '300' }}>Please signup here</h3>
                    <label style={{ marginTop: '4rem', fontSize: '1.5rem', fontWeight: '500' }}>Username</label>
                    <input type="text" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                    <label style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: '500' }}>Email-address</label>
                    <input type="email" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                    <label style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: '500' }}>Password</label>
                    <input type="text" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                    <label style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: '500' }}>confirm-password</label>
                    <input type="text" style={{ border: 'none', borderBottom: '.1rem solid white', backgroundColor: "transparent", outline: 'none' }} />
                     <div>
                    <button style={{marginTop:'2rem',width:"10rem",border:'.1rem solid white',backgroundColor:'transparent',borderRadius:'.8rem',padding:'.2rem',textAlign:'center',marginLeft:'0rem',color:'blue'}}>signup</button>

                     </div>

                </div>

            </div>
      
    </>
  )
}

export default Signup
