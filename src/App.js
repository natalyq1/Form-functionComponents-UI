
import { Fragment } from 'react';
import './App.css';
import FormSignUp from './components/FormSignUp/FormSignUp';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
//import ClassComponent from './components/ClassComponent';
//import FuncComponent from './components/FuncComponent';

function App() {

  const handleSubmit = (valores) => {
    console.log('app js: ', valores);
  }
  return (
    <Fragment>
      {/* 
       <ClassComponent />
      <FuncComponent />
      */}
      <Container component='section' maxWidth='sm'>
      <Typography 
      variant='h3' 
      align='center' 
      component='article'
      >Formulario de registro
      </Typography>
      <FormSignUp 
      handleSubmit ={handleSubmit}
      />
      </Container>
    </Fragment>
  );
}

export default App;
