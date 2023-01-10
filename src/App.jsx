import './App.css'
import React,{useState} from 'react';
import BirthdayInputForm from './components/BirthdayInputForm'
import moment from 'moment';

function App() {
  const [age,setAge]=useState({years:'',months:'',days:''});
  const [visible,setVisible]=useState(false);
 

  function calculateAge(dob) {

    const date= moment(dob);
    const ageMs= moment.duration(moment().diff(date));
    const resultingAge={
      years:ageMs.years(),
      months: ageMs.months(),
      days:ageMs.days()+1
    }
    setAge(resultingAge);
    setVisible(true);
  
  }

  return (
    <div >
      <h1>Age Calculator</h1>
     <BirthdayInputForm handleSubmit={calculateAge}/>
     {visible && <p>{age.years} years, {age.months} months, {age.days} days</p>}
    </div>
  )
}

export default App
