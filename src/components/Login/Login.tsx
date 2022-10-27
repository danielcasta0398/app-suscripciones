
import './login.css'
<link rel="stylesheet" href="login.css" />
const Login = () => {

    return (       
        <div className='cuerpo'>
            <h1><strong>Inicia sesión</strong></h1>
            <div className='imagenes'>
                <img className='imagen' src="https://imgs.search.brave.com/fsTc1ms42VIWBaO4rlTMZ1lTtSqHajWzBSy8hP8svFU/rs:fit:479:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/NENwR2w2V21yUjJQ/TWxTOFpqTFlnSGFI/ViZwaWQ9QXBp"  alt="logo de facebbok" />
                <img className='imagen' src="https://imgs.search.brave.com/hH1YhV962Iq0V-867VB5xs4qjnmmLtFCb4j1L5h8nlA/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi5C/SzVYUWF4RE04czdh/bFgxekVxUmp3JnBp/ZD1BcGk" alt="logo de google" />
            </div>
            <p>O con tu email</p> <hr />
            <form className='formulario' action="/enviar-respuesta">
                <input type="email" placeholder='Direccion de correo electronico' required/> <br />
                <input type="password" placeholder='contraseña' required/> <br />
                <div>
                    <input type="checkbox" />Recuérdame <br /> <br />
                </div>
                <button id='boton-enviar' type='submit'>Inicia sesión</button> <br /> <br />
                <p>¿Contraseña olvidada? <a href='#'>Haz clic aquí</a></p>
                <p><strong>¿No tienes cuenta? <a href='#'>Crea una cuenta</a></strong></p>
            </form>
        </div>
    );
};

export default Login;