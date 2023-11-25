import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from backend on component mount
    axios.get('http://localhost:8000/api/students/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - Age: {student.age} - Department: {student.department} - CGPA: {student.cgpa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
