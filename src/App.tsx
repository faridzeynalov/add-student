import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Table from "./components/Table";

function App() {

  const [students, setStudents] = useState<unknown>([
    {id: 1, name: "Farid Zeynalov", email: "farid@one.az", gpa: 5},
    {id: 2, name: "John Doe", email: "johndoe@gmail.com", gpa: 5},
    {id: 3, name: "Jane Doe", email: "janedoe@gmail.com", gpa: 5},
  ])



  const addStudent = (name: string,email: string, gpa: number) : void => {
    setStudents([...students, {id: students.length + 1, name, email, gpa}])
  }



  return (
    <>
      <div className="app">
        <Add addStudent={addStudent}/>
        <Table students={students} setStudents={setStudents}/>
      </div>
    </>
  );
}

export default App;
