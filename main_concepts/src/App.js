import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateHook from "./components/hooks/useStateHook";
import UseEffectHook from './components/hooks/useEffectHook';

const App = () => {
  return (
    <>
      <UseStateHook />
      <hr></hr>
      <UseEffectHook />
    </>
  );
}

export default App;
