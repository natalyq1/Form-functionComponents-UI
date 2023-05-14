import React from 'react'
import Button from '@mui/material/Button';

function FormSignUp() {
    return (
        <>
            <form>
                <label htmlFor="">Nombre:</label>
                <input type="text" />
                <label htmlFor="">Apellidos:</label>
                <input type="text" />
                <label htmlFor="">Correo electrónico:</label>
                <input type="email" />
                <label htmlFor="">Promociones:</label>
                <input type="checkbox" />
                <label htmlFor="">Novedades:</label>
                <input type="checkbox" />
                <Button variant='contained' color='success'>Registrarse</Button>
            </form>
        </>
    )
}

export default FormSignUp