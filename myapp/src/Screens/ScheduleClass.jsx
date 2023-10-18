import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../components/Navbar';

function ScheduleClass() {
  const [formData, setFormData] = useState({
    className: "",
    date: new Date(),
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'#5e3ad4',display:'flex',justifyContent:'center',padding:'5rem',}}>
      <h1 style={{fontSize:'3.5rem',fontWeight:600}}>Schedule a Class</h1>
      <form onSubmit={handleSubmit} style={{display:'flex',marginLeft:'-24rem',gap:'3rem',flexDirection:'column',justifyContent:'center',marginTop:'10rem',padding:'3rem'}}>
        <div>
          <label style={{fontWeight:500,}}>Class Name</label>
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            style={{backgroundColor:'transparent',border:'none',outline:'none',borderBottom:'.1rem solid white',marginLeft:'.5rem'}}
          />
        </div>
        <div>
        <label style={{fontWeight:500,}}>Date:</label>
          <DatePicker 
            selected={formData.date}
            onChange={handleDateChange}
            
            
            
          />
        </div>
        <div>
        <label style={{fontWeight:500,}}>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            style={{backgroundColor:'transparent',border:'none',outline:'none',borderBottom:'.1rem solid white',marginLeft:'.5rem'}}
          />
        </div>
        <div>
        <label style={{fontWeight:500,}}>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            style={{backgroundColor:'transparent',border:'none',outline:'none',borderBottom:'.1rem solid white',marginLeft:'.5rem'}}
          />
        </div>
        <button type="submit" style={{backgroundColor:'transparent',border:'.1rem solid white', padding:".5rem"}}>Schedule Class</button>
      </form>
    </div>
    </>
  );
}

export default ScheduleClass;
