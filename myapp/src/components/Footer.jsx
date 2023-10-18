import React from 'react'


export default function Footer() {
    return (
        <div>
            <footer style={{ display: 'flex', marginTop: '15.0rem', marginLeft: '10.0rem' }}>
                <div className="newsleter">
                    <h3 style={{ textTransform: 'capitalize' }}><i className="fa-solid fa-dumbbell" style={{ color: 'blue' }}></i>fitney <span>.</span></h3>
                    <h1 style={{ marginTop: '6.0rem', fontSize: '5.0rem', fontWeight: '60.0rem' }}>Subscribe our newsletter  <br />for gym updates</h1>
                    <div style={{ marginTop: '5.0rem' }}>
                        <input type="text" style={{ width: '40.0rem', height: '5.0rem', padding: '2.0rem', fontSize: '2.0rem' }} placeholder='enter your Email' />
                        <button style={{ marginLeft: '-11.0rem', backgroundColor: 'blue', border: 'none', padding: '.8rem', width: '10.0rem', borderRadius: '.5rem' }}>subscribe</button>
                    </div>

                </div >

                <div className="all aboutus" style={{ marginLeft: '7.0rem' }}>
                    <div style={{ border: '.1rem solid gray', height: '60.0rem', width: '0rem', marginLeft: '0rem' }}>
                        <div className="list" style={{ display: 'flex', gap: '10.0rem', marginLeft: '2.0rem' }}>

                            <div>
                                <h3>company</h3>
                                <ul style={{ listStyle: 'none', marginTop: '1.0rem', fontSize: '1.5rem' }}>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>

                                </ul>
                            </div>
                            <div>
                                <h3>company</h3>
                                <ul style={{ listStyle: 'none', marginTop: '1rem ', fontSize: '1.5rem' }}>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>


                                </ul>
                            </div>
                            <div>
                                <h3>company</h3>
                                <ul style={{ listStyle: 'none', marginTop: '1rem ', fontSize: '1.5rem' }}>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    

                                </ul>
                            </div>

                        </div>
                        <div className="second" style={{ display: 'flex', gap: '10.0rem', marginLeft: '2rem', marginTop: 50 }}>
                            <div>
                                <h3>company</h3>
                                <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '1.5rem' }}>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>
                                    <li style={{ marginTop: '2.0rem' }}>home</li>


                                </ul>
                            </div>
                            <div>
                                <h3>company</h3>
                                <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '1.5rem' }}>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    <li style={{ marginTop: '2.0rem' }}>About</li>
                                    

                                </ul>

                            </div>

                        </div>




                    </div>



                </div>

            </footer>
            <p style={{ marginLeft: '80rem', marginTop: '10rem' }}>&#xA9; 2023 Fitney. All rights reserved.</p>
        </div>
    )
}
