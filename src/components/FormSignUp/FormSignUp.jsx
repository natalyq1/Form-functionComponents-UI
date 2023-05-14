import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

function FormSignUp() {

    const [name, setName] = useState('')
    useEffect( () => {
console.log('name cambio: ', name);
    },[name])

    return (
        <>
            <form>
                <TextField
                    id="name"
                    label="Nombre"
                    variant="standard"
                    fullWidth
                    margin='normal'
                    onChange={ (e) => {
                        console.log(e.target.value);
                        setName(e.target.value);
                        
                    }}
                    value={name}
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
                    margin='normal'
                    control=
                    {
                    <Switch defaultChecked  />
                    } 
                    label='Promociones'
                    />
                
                <FormControlLabel 
                margin='normal'
                    control=
                    {
                    <Switch defaultChecked  />
                    } 
                    label='Novedades'
                    />
</FormGroup>
                <Button variant='contained' color='success' margin='normal'>Registrarse</Button>
            </form>
        </>
    )
}

export default FormSignUp