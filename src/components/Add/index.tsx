import { useEffect, useState } from 'react'
import './index.scss'

const Add = ({addStudent}) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [gpa, setGpa] = useState(0)
  
  const add = (e) => {
    e.preventDefault()
    addStudent(fullName, email, gpa)
    e.target.reset()
  }


  


  return (
    <>
        <h1>
            Add student
        </h1>
        <form className="add" onSubmit={(e)=> {
          e.preventDefault()
          add(e)
          }}>
            <input type="text" placeholder="name" onChange={(e)=>setFullName(e.target.value)} required/>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="number" placeholder="gpa" onChange={(e)=>setGpa(+e.target.value)} required/>
            <button type="submit">Add</button>
        </form>
    </>
  )
}

export default Add