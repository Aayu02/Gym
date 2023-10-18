import React from 'react'
import Footer2 from './Footer2'

export default function Body() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundImage: "URL('/img/f1.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>

        <div className="right" style={{ marginTop: '15.0rem', marginLeft: '-50.0rem' }}>
          <h1 style={{ fontSize: '6.0rem', wordSpacing: '-0', textTransform: 'capitalize', fontWeight: '90.0rem' }}>Your <br /> <span style={{ lineHeight: .5, }}>Personalized <br />Fitness  <br />Journey <br /> Starts Here</span></h1>
          <p style={{ textTransform: 'capitalize', marginTop: '5.0rem', color: 'white', fontSize: '2.0rem' }}>welcome to our gym & fitness training centre. <br />sore today , strong tomarrow.improve your <br />fitness today.</p>
          <div className='rates' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='ratiings' style={{ marginTop: '7.0rem' }}>
              <h3 style={{ fontSize: '4.0rem', fontWeight: 500 }}>4.3</h3>
              <p style={{ color: 'white' }}>average clients <br />platform rattings </p>
            </div>
            <div className='ratiings' style={{ marginTop: '7.0rem' }}>
              <h3 style={{ fontSize: '4.0rem', fontWeight: 500 }}>10+</h3>
              <p style={{ color: 'white' }}>average clients <br />platform rattings </p>
            </div>
            <div className='ratiings' style={{ marginTop: '7.0rem' }}>
              <h3 style={{ fontSize: '4.0rem', fontWeight: 500 }}>20+</h3>
              <p style={{ color: 'white' }}>average clients <br />platform rattings </p>
            </div>
          </div>
        </div>


      </div>
      <div style={{ height: '20rem', backgroundColor: '#5e3ad4', display: 'flex', gap: '30rem', justifyContent: 'center', alignItems: 'center', marginTop: '3rem' }}>
        <div className='left' style={{ color: 'white' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 800 }}>Welcome to <br />Our Site</h1>

        </div>
        <div className="right" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
          <p>Welcome visitors to your site with a short, engaging <br /> introduction. Double click to edit and add your own text.</p>
          <button style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', fontSize: '1rem', fontWeight: 500 }}>Read more</button>
        </div>
      </div>



      <div className="join" style={{ backgroundColor: 'white', }}>
        <h1 style={{ color: '#5e3ad4', fontWeight: 700, marginLeft: '30rem', padding: '6rem', fontSize: '4rem' }}>Join Fitney and Transform Your <br /><span style={{ marginLeft: '8rem' }}> Body and Mind</span></h1>
        <div className='container' style={{ display: 'flex', gap: '10rem' }}>
          <div className="left" style={{ marginLeft: '-20rem' }}>
            <video style={{ width: '60rem', height: '100%', marginTop: '0', }} >
              <source src="img/file.mp4" type="video/webm" />
            </video>
          </div>
          <div className="right" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '7rem' }}>
            <h1 style={{ color: '#5e3ad4', fontWeight: 700, fontSize: '4rem' }}>Community and <br /> Support</h1>
            <p style={{ color: 'black', fontSize: '1.5rem', fontWeight: 300 }}>Our community of fitness enthusiasts and <br />
              experts provide the support and motivation <br />
              you need to achieve your fitness goals.</p>
          </div>
        </div>
        <div className='container' style={{ display: 'flex', gap: '10rem', }}>
          <div className="left" style={{ gap: '2rem', marginLeft: '-10rem', width: '100%' }}>
            <h1 style={{ color: '#5e3ad4', fontWeight: 600, fontSize: '4rem' ,marginTop:'10rem'}}>
              Expert <br />Guidance and<br />Resources</h1>
            <p style={{ color: 'black', fontSize: '1.5rem', fontWeight: 300 }}>Our expert blog and resources offer valuable <br />
              insights and tips to help you on your fitness <br />
              journey.</p>
          </div>
          <div className="rigth" style={{ marginLeft: '22rem', marginTop: '-0rem',  }}>
            <img  style={{width:"65rem"}} src="img/gym1.png" alt="" />

          </div>
        </div>
        <div className='container' style={{ display: 'flex', gap: '10rem' }}>
          <div className="left" style={{ marginLeft: '-20rem' }}>
            <img style={{ width: '60rem', height: '50rem', marginTop: '0', }} src="https://static.wixstatic.com/media/ad420a_b15c03df96db4272a2a25f4cfeef2ccd~mv2_d_2502_2002_s_2.jpg/v1/fill/w_487,h_622,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/ad420a_b15c03df96db4272a2a25f4cfeef2ccd~mv2_d_2502_2002_s_2.jpg" />
             
            
          </div>
          <div className="right" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '7rem' }}>
            <h1 style={{ color: '#5e3ad4', fontWeight: 700, fontSize: '4rem' ,margin:'5rem'}}>Premium<br /> Memberships</h1>
            <p style={{ color: 'black', fontSize: '1.5rem', fontWeight: 300,marginTop:'-5rem',marginLeft:'5rem'}}>Enhance your fitness experience with our <br />premium membership packages. </p>
          </div>
        </div>

      </div>

    <div className='foloow us' style={{backgroundColor:'white',}}>
      <h1 style={{color:"#5e3ad4",marginLeft:'50rem',paddingTop:'5rem',fontSize:'4rem',fontWeight:700}}>Follow Us @Fitney</h1>
      <div className='images'style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'4rem',paddingTop:'5rem' ,paddingBottom:'3rem'}}>
        <div className="image" style={{width:'17rem',height:'17rem',}}>
          <img src="img/h1.jpg" alt="14" style={{width:'17rem',height:'17rem',}}/>
        </div>
        <div className="image" style={{width:'17rem',height:'17rem',}}>
          <img src="img/h2.jpg" alt="14" style={{width:'17rem',height:'17rem',}}/>
        </div>
        <div className="image" style={{width:'17rem',height:'17rem',}}>
          <img src="img/h3.jpg" alt="14" style={{width:'17rem',height:'17rem',}}/>
        </div>
        <div className="image" style={{width:'17rem',height:'17rem',}}>
          <img src="img/h4.jpg" alt="14" style={{width:'17rem',height:'17rem',}}/>
        </div>
        <div className="image" style={{width:'17rem',height:'17rem',}}>
          <img src="img/h5.jpg" alt="14" style={{width:'17rem',height:'17rem',}}/>
        </div>
      </div>
      
    </div>
    <Footer2/>
   
    </>
  )
}
