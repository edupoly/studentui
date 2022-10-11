import React from 'react'
import { useState } from 'react'

function AddStudent() {
  const [newstudent, setNewstudent] = useState({
    firstname:'',
    lastname:'',
    gender:null
  })
  function addStudent(){
    fetch("http://localhost:4000/addStudent",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newstudent)
    })
    .then((res)=>{return res.json()})
    .then(data=>{alert("new student added")})
    
  }
  return (
    <div>
      <input type="text" onChange={(e)=>{setNewstudent({...newstudent,firstname:e.target.value})}} /><br></br>
      <input type="text" onChange={(e)=>{setNewstudent({...newstudent,lastname:e.target.value})}} /><br></br>
      <input type="radio" name='gender' value='male' onChange={(e)=>{setNewstudent({...newstudent,gender:e.target.value})}} />:Male<br></br>
      <input type="radio" name='gender' value='female' onChange={(e)=>{setNewstudent({...newstudent,gender:e.target.value})}} />:Female<br></br>
      <button onClick={addStudent}>Add Student</button>
    </div>
  )
}

export default AddStudent