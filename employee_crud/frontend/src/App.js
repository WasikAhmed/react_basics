import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return(
    <div className="App">
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    </div>
  );
}

export default App;
