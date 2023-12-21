import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateHook from "./components/hooks/useStateHook";
import UseEffectHook from './components/hooks/useEffectHook';
import StudentList from './components/StudentList';


const App = () => {
  return (
    <>
      <UseStateHook />
      <hr></hr>
      <UseEffectHook />
      <hr></hr>
      <StudentList />
    </>
  );
}

export default App;
