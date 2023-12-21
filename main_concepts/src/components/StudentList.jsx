import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/students/`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students', error);
            });
    }, []);

    return (
    <div className="d-flex flex-column align-items-center mt-4 mb-4">
        <h1>Fetching student details using useEffect Hook</h1>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>CGPA</th>
            </tr>      
        </thead>
        <tbody>
            {students.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.department}</td>
                    <td>{student.cgpa}</td>
                </tr>
            ))}
        </tbody>
        </Table> 
    </div>
    );
}

export default StudentList;