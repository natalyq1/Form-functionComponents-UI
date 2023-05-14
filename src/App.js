
import { Fragment } from 'react';
import './App.css';
import FormSignUp from './components/FormSignUp/FormSignUp';
//import ClassComponent from './components/ClassComponent';
//import FuncComponent from './components/FuncComponent';

function App() {
  return (
    <Fragment>
      {/* 
       <ClassComponent />
      <FuncComponent />
      */}
      <h1>Formulario de registro</h1>
      <FormSignUp />
    </Fragment>
  );
}

export default App;
