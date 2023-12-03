import React, { useState } from 'react';
import './signin.css';


function SignIn() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        age: '',
        password: '',
        guardians: [
            { firstName: '', lastName: '', email: '' }, // Guardian 1
            { firstName: '', lastName: '', email: '' }, // Guardian 2
            { firstName: '', lastName: '', email: '' }  // Guardian 3
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Manejamos el caso especial de los campos del guardián
        if (name.startsWith('guardians')) {
            const [guardianIndex, guardianField] = name.split('.').slice(1);
            setFormData((prevData) => {
                const updatedGuardians = [...prevData.guardians];
                updatedGuardians[guardianIndex] = {
                    ...updatedGuardians[guardianIndex],
                    [guardianField]: value
                };
                return {
                    ...prevData,
                    guardians: updatedGuardians
                };
            });
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e, formType) => {
        e.preventDefault();
    
        // Lógica para enviar el formulario según el tipo
        if (formType === 'user') {
            // Aquí puedes realizar la lógica para enviar los datos del usuario a tu backend
            console.log('Datos del usuario enviados:', formData);
        } else if (formType === 'guardians') {
            // Aquí puedes realizar la lógica para enviar los datos de los guardianes a tu backend
            console.log('Datos de los guardianes enviados:', formData.guardians);
        }
    };

    return (
        <div className="signin-page">
            <div className='img-signin'>
                <div className='img-filter'></div>
                <img src="src/assets/images/img-registro.jpg" alt="more_than_a_body" />
            </div>
            <div className='registro'>
                <div className='form-signin'>
                    <h1 className='h1-signin'>REGÍSTRATE</h1>
                    <form className='form-user' onSubmit={(e) => handleSubmit(e, 'user')}>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Nombre:</h5>
                            <input className='input-signin' type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </label>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Apellido:</h5>
                            <input className='input-signin' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </label>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Teléfono:</h5>
                            <input className='input-signin' type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </label>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Email:</h5>
                            <input className='input-signin' type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Edad:</h5>
                            <input className='input-signin' type="text" name="age" value={formData.age} onChange={handleChange} />
                        </label>
                        <label className='label-signin'>
                            <h5 className="h5-signin">Contraseña:</h5>
                            <input className='input-signin' type="password" name="password" value={formData.password} onChange={handleChange} />
                        </label>
                        <button className='button-signin' type="submit">Enviar Usuario</button>
                    </form>
                    <form className='guardian-signin' onSubmit={(e) => handleSubmit(e, 'guardians')}>
                        <h3 className='h3-signin'>DATOS DE TUS GUARDIANES</h3>
                        {[0, 1, 2].map((guardianIndex) => (
                            <div key={guardianIndex}>
                                <h4 className='h4-signin'>{`GUARDIAN ${guardianIndex + 1}`}</h4>
                                <label className='label-signin'>
                                    <h5 className="h5-signin">Nombre:</h5>
                                    <input
                                        className='input-signin'
                                        type="text"
                                        name={`guardians.${guardianIndex}.firstName`}
                                        value={formData.guardians[guardianIndex].firstName}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label className='label-signin'>
                                    <h5 className="h5-signin">Apellido:</h5>
                                    <input
                                        className='input-signin'
                                        type="text"
                                        name={`guardians.${guardianIndex}.lastName`}
                                        value={formData.guardians[guardianIndex].lastName}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label className='label-signin'>
                                    <h5 className="h5-signin">Email:</h5>
                                    <input
                                        className='input-signin'
                                        type="email"
                                        name={`guardians.${guardianIndex}.email`}
                                        value={formData.guardians[guardianIndex].email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        ))}
                        <button className='button-signin' type="submit">Enviar Guardianes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;