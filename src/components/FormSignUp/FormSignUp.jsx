import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

function FormSignUp({ handleSubmit }) {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Deben ser al menos 3 caracteres'
        }
    })

    const [errorsA, setErrorsA] = useState({
        name: {
            error: false,
            message: ''
        }
    })

    function validarNombre(nombre) {
        console.log(nombre);
        if (nombre.length >= 3) {
            return { name: { error: false, message: '' } }
        } else {
            return {
                name: { error: true, message: 'Deben ser al menos 3 caracteres' }
            }
        }
    }

    function validarApellido(apellido) {
        console.log(apellido);
        if (apellido.length >= 4) {
            return { name: { error: false, message: '' } }
        } else {
            return {
                name: { error: true, message: 'Deben ser al menos 4 caracteres' }
            }
        }
    }

        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit({ name, lastName, email, prom, nov });
                }}>
                    <TextField
                        id="name"
                        label="Nombre"
                        variant="standard"
                        fullWidth
                        margin='normal'
                        onChange={(e) => {
                            //console.log(e.target.value);
                            setName(e.target.value);
                        }}
                        value={name}
                        error={errors.name.error}
                        helperText={errors.name.error ? errors.name.message : ''}
                        onBlur={(e) => {setErrors(validarNombre(e.target.value))
                        }}
                    />

                    <TextField
                        id="lastName"
                        label="Apellido"
                        variant="standard"
                        fullWidth
                        margin='normal'
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        value={lastName}
                        error={errorsA.name.error}
                        helperText={errorsA.name.error ? errorsA.name.message : ''}
                        onBlur={(e) => {setErrorsA(validarApellido(e.target.value))
                        }}
                    />

                    <TextField
                        id="email"
                        label="Correo electrónico"
                        variant="standard"
                        fullWidth
                        margin='normal'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />


                    <label htmlFor="">Promociones:</label>
                    <FormGroup >
                        <FormControlLabel
                            margin='normal'
                            control=
                            {
                                <Switch
                                    checked={prom}
                                    onChange={(e) => {
                                        setProm(e.target.checked);
                                    }}
                                />
                            }
                            label='Promociones'
                        />

                        <FormControlLabel
                            margin='normal'
                            control=
                            {
                                <Switch
                                    checked={nov}
                                    onChange={(e) => {
                                        setNov(e.target.checked);
                                    }}
                                />
                            }
                            label='Novedades'
                        />
                    </FormGroup>
                    <Button
                        type='submit'
                        variant='contained'
                        color='success'
                        margin='normal'>Registrarse</Button>
                </form>
            </>
        )
    }

 export default FormSignUp