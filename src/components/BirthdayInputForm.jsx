import React, { useState } from "react";
import './BirthdayInputForm.css'

const BirthdayInputForm = ({handleSubmit}) =>{

    const [dob,setDob]=useState('');

    const submitHandler = (event)=>{
        event.preventDefault();
        handleSubmit(dob)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="dob">Enter your dob:</label>
            <input type="date" name="dob" id="dob" value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
            <input type="submit" value="Calculate My Age" />
          </form>
    );
}

export default BirthdayInputForm;