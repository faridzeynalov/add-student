import { useEffect, useState } from "react";
import "./index.scss";

const Table = ({ students, setStudents }) => {

  const [filter, setFilter] = useState('')
  const filteredStudents = students.filter(student => student.name.toLowerCase().includes(filter.trim().toLowerCase()))

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id))
  }


  return (
    <>
      <div className="tableTop">
        <form action="">
          <input
            type="text"
            placeholder="search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        </form>
      </div>
      {students.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>GPA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                
                  <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.gpa}</td>
                  <td>
                    <button
                      style={{ marginBottom: "10px", marginRight: "10px" }}
                      onClick={()=> deleteStudent(student.id)}
                    >
                      delete
                    </button>
                    <button>edit</button>
                  </td>
                </tr>

                
                

                
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
