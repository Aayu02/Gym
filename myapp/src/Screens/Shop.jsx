import React from 'react'
import Navbar from '../components/Navbar'

const Shop = () => {
    return (
        <>
        <Navbar/>
        <div style={{backgroundColor:'white'}}>
            <div className='banner'style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'2rem'}}>
                <img src="/img/pb1.png" alt="" />
                <div className="details" style={{color:'#5e3ad4',fontWeight:300,marginLeft:'-65rem', padding:'2rem'}}>
                    <h3>All Products</h3>
                    <p>This is your category description. It’s a great place to tell customers what this category is <br />about, connect with your audience and draw attention to your products.</p>
                </div>
            </div>
            <div className="product" style={{color:'#5e3ad4',}}>
                <p style={{marginLeft:'10rem'}}>12 products</p>
                <div className="products" style={{display:'flex',justifyContent:'center',gap:'1em'}}>
                  <div>
                    <img src="/img/p1.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p2.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p3.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p4.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p5.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p6.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                </div>
                <div className="products" style={{display:'flex',justifyContent:'center',gap:'1em'}}>
                  <div>
                    <img src="/img/p7.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p8.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p9.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p10.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p11.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                  <div>
                    <img src="/img/p12.png" alt="" />
                    <div style={{padding:'.5rem'}} >
                        <h4 style={{fontWeight:300, fontSize:'1.2rem'}}>i'm a product</h4>
                        <h4 style={{fontWeight:300,fontSize:'1.4rem'}}>$25.00</h4>
                    </div>
                  </div>
                </div>
                
            </div>
            


            </div>
            
        </>
    )
}

export default Shop
