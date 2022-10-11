import React from 'react'
import { useEffect,useState } from 'react'

function AllStudents() {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    getAllStudents()
  },[])
  function deleteStudent(id){
    fetch("http://localhost:4000/deleteStudent/"+id)
    .then(res=>res.json())
    .then(data=>{
      getAllStudents()
    })
  }
  function getAllStudents(){
    fetch("http://localhost:4000/listStudents")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setStudents([...data])
    })
  }
  return (
    <div>
      <ul>
        {
          students && students.map((student,i)=>{
            return(
              <li>
                {student.firstname}
                <button onClick={()=>{deleteStudent(student['_id'])}}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AllStudents