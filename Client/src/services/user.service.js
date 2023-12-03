// useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3500/api/auth/whoami', {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         }); // Sustituye con tu URL real
//         setPerfil(respuesta.data); // Suponiendo que la API responde con los datos del usuario directamente
//         console.log(respuesta.data);
//       } catch (error) {
//         console.error('Hubo un error al obtener los datos del usuario:', error);
//       }
//     }