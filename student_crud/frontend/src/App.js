import React from 'react';
import StudentList from './components/StudentList';
import CreateStudentForm from './components/CreateStudentForm';

const App = () => {
  return (
    <div className="App">
        <h1>Hello</h1>
      <StudentList />
      <hr />
      <CreateStudentForm />
    </div>
  );
};

export default App;
