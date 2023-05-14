import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

function FormSignUp() {
    return (
        <>
            <form>
                <TextField
                    id="name"
                    label="Nombre"
                    variant="standard"
                    fullWidth
                    margin='normal'
                />

                <TextField
                    id="lastName"
                    label="Apellido"
                    variant="standard"
                    fullWidth
                    margin='normal'
                />

                <TextField
                    id="email"
                    label="Correo electrónico"
                    variant="standard"
                    fullWidth
                    margin='normal'
                />


                <label htmlFor="">Promociones:</label>
                <FormGroup >
                    <FormControlLabel 
                    control=
                    {
                    <Switch defaultChecked  />
                    } 
                    label='Promociones'
                    />
                
                <FormControlLabel 
                    control=
                    {
                    <Switch defaultChecked  />
                    } 
                    label='Novedades'
                    />
</FormGroup>
                <Button variant='contained' color='success'>Registrarse</Button>
            </form>
        </>
    )
}

export default FormSignUp