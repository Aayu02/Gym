import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
       <div className="f-img" style={{ display: 'flex', gap: '8rem', marginLeft: '5rem', marginTop: '5rem' }}>
                    <img src="./public/img/A1.jpeg" style={{ width: '50rem', height: '40rem' }} alt="" />
                    <div className="info" style={{ width: '50rem', height: '40rem', backgroundColor: '#5e3ad4' }}>
                        <div className="contennt" style={{ margin: '7rem 15rem' }}>
                            <h1 style={{ fontSize: '4.4rem', fontWeight: 500 }}>About <br />Fitney</h1>
                            <h4 style={{ fontWeight: '300' }}>Get to know us</h4>
                            <p style={{ marginTop: '3rem' }}> FitFlicks is your go-to source for personalized fitness plans, nutrition and meal planning, live online classes, workout tracking,
                                community and social integration, comprehensive exercise library, mobile app compatibility,
                                expert blog and resources, and premium memberships. Our goal is to provide you with the tools and
                                resources you need to achieve your fitness goals and maintain a healthy lifestyle. Let us help you become
                                the best version of yourself!</p>
                        </div>
                    </div>
                </div>
                <div className="f-img" style={{ display: 'flex', gap: '8rem', marginLeft: '5rem', marginTop: '5rem' }}>
                    <div className="info" style={{ width: '50rem', height: '55rem', backgroundColor: '#ffffff' }}>
                        <div className="contennt" style={{ margin: '7rem 15rem' }}>
                            <h1 style={{ fontSize: '4.4rem', fontWeight: 500, color: '#5e3ad4' }}>About  <br />Our Founder</h1>
                            <h4 style={{ fontWeight: '300', color: '#5e3ad4' }}>Meet Our Team</h4>
                            <p style={{ marginTop: '3rem', color: '#141314' }}> At FitFlicks, we are proud to have a
                                team of certified fitness trainers and nutrition experts who are passio
                                nate about helping people live their healthiest lives. Our founder, John Smit
                                h, has over 10 years of experience in the fitness industry and is committed to pr
                                oviding our clients with the highest quality resources and support. This is a great s
                                pace to write a long text about your company and your services. You can use this space to go into a little more detail about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                                Make your company stand out and show your visitors who you are.</p>
                        </div>
                    </div>
                    <img src="./public/img/A2.jpg" style={{ width: '50rem', height: '55rem' }} alt="" />
                </div>
    </>
  )
}
