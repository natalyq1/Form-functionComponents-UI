
import { Fragment } from 'react';
import './App.css';
import FormSignUp from './components/FormSignUp/FormSignUp';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
//import ClassComponent from './components/ClassComponent';
//import FuncComponent from './components/FuncComponent';

function App() {
  return (
    <Fragment>
      {/* 
       <ClassComponent />
      <FuncComponent />
      */}
      <Container component='section' maxWidth='sm'>
      <Typography variant='h3' align='center' component='article'>Formulario de registro</Typography>
      <FormSignUp />
      </Container>
    </Fragment>
  );
}

export default App;
