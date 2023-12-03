// import axios from "axios";
// const BASE_URL = "http://localhost:3500/api";

// export const createEmergencyCase = async (position) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/emergencycase`, {
//         latitude: position.lat,
//         longitude: position.lng,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       return response.data;
//     } catch (error) {
//       console.error('Error al realizar la petición:', error);
//       throw new Error("Error occurred while creating the movie. Please try again.");
//     }
//   };