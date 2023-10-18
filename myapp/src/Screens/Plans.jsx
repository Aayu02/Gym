import React from 'react'
import Navbar from '../components/Navbar'

export default function Plans() {
    return (
        <div >
            <Navbar />
            <div></div>
            <div className="main" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: '#5e3ad4', fontWeight: 700, marginTop: '3rem' }}>Choose your pricing plan</h1>
                <div className="boxes" style={{ display: 'flex', flexDirection: "column", marginTop: '3rem', padding: '2rem', backgroundColor: '#5e3ad4' }}>
                    <div className="1" >
                        <h5 style={{ fontWeight: 300, fontSize: '1.4rem' }}>Silver Membership</h5>
                        <h1 style={{ fontSize: '6rem', fontWeight: 700, marginLeft: '2rem' }}> <span style={{ fontSize: '1.2rem', }}>$</span>25</h1>
                        <h3 style={{ fontSize: '1.2rem', marginLeft: "2rem", marginTop: '-1rem' }}>Every month</h3>
                        <p style={{ fontWeight: 300 }}>Short-term trial for beginners</p>
                        <p style={{ fontWeight: 300, marginLeft: '2rem', marginTop: '2rem' }}>Valid for 2 months</p>
                        <button style={{ backgroundColor: 'transparent', marginLeft: '1rem', border: '.1rem solid white', width: '10rem', padding: '.3rem' }}>select</button>
                    </div>
                </div>
                <div className='2' style={{ backgroundColor: 'white', color: '#5e3ad4', border: '.1rem solid black', borderTop: 'none', padding: '2rem', width: '16.1rem', height: '12rem' }}>
                    <p>Silver Membership</p>
                    <p>Fitness assessment</p>
                    <p>Locker room with showers</p>
                </div>

                <div style={{ display: 'flex', flexDirection: "row", marginTop: '3rem', padding: '2rem', backgroundColor: '#5e3ad4' }}>
                    <div className="1" >
                        <h5 style={{ fontWeight: 300, fontSize: '1.4rem' }}>Silver Membership</h5>
                        <h1 style={{ fontSize: '6rem', fontWeight: 700, marginLeft: '2rem' }}> <span style={{ fontSize: '1.2rem', }}>$</span>25</h1>
                        <h3 style={{ fontSize: '1.2rem', marginLeft: "2rem", marginTop: '-1rem' }}>Every month</h3>
                        <p style={{ fontWeight: 300 }}>Short-term trial for beginners</p>
                        <p style={{ fontWeight: 300, marginLeft: '2rem', marginTop: '2rem' }}>Valid for 2 months</p>
                        <button style={{ backgroundColor: 'transparent', marginLeft: '1rem', border: '.1rem solid white', width: '10rem', padding: '.3rem' }}>select</button>
                    </div>
                </div>
                <div className='2' style={{ backgroundColor: 'white', color: '#5e3ad4', border: '.1rem solid black', borderTop: 'none', padding: '2rem', width: '16.1rem', height: '12rem' }}>
                    <p>Silver Membership</p>
                    <p>Fitness assessment</p>
                    <p>Locker room with showers</p>
                </div>
            </div>
        </div>
    )
}
