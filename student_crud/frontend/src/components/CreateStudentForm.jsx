import React, { useState } from 'react';
import axios from 'axios';

const CreateStudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [cgpa, setCgpa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name: name,
      age: age,
      department: department,
      cgpa: cgpa
      // Add more fields here as needed
    };

    // Send POST request to create a new student
    axios.post('http://localhost:8000/api/students/', newStudent)
      .then(response => {
        console.log('Student created:', response.data);
        // Optionally, you can perform actions after successful creation, like redirecting or showing a success message
      })
      .catch(error => {
        console.error('Error creating student:', error);
        // Handle error scenarios if needed
      });
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label>cgpa:</label>
          <input
            type="number"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />
        </div>
        {/* Add more input fields for additional student details */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStudentForm;
