import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';
import './login.css';

const Login = ({ isOpen, onRequestClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
        // Por ahora, solo mostraremos los datos en la consola
        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);

        setUsername('');
        setPassword('');

        // Luego, puedes llamar a la función de cierre del modal o realizar otras acciones
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Iniciar Sesión"
            className="ModalContainer"
            overlayClassName="Overlay"
        >
            <button className="close-icon" onClick={onRequestClose}>X</button>
            <h2 className='login'>INICIAR SESIÓN</h2>
            <p className='login'>¿Aún no tienes una cuenta? <Link to="/registro" className="registrate-link">Regístrate</Link></p>
            <div className='formulario'>
                <form className='formulario' onSubmit={handleLogin}>
                    <label className='email'>
                        <h4>E-mail:</h4>
                        <input
                            required
                            type="email" name="email"
                            className='input-email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className='contrasena'>
                        <h4>Contraseña:</h4>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            className='input-contrasena' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <label className="mostrar-contrasena">
                        <input
                            type="checkbox"
                            className="mostrar-contrasena-checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Mostrar contraseña
                    </label>
                    <br />
                    <button type="submit" className='continuar'>
                        Continuar
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default Login;
