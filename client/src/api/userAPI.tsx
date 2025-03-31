// import Auth from '../utils/auth';

// const retrieveUsers = async () => {
//   try {
//     const response = await fetch('/api/users', {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       }
//     });
//     const data = await response.json();

//     if(!response.ok) {
//       throw new Error('invalid user API response, check network tab!');
//     }

//     return data;

//   } catch (err) { 
//     console.log('Error from data retrieval:', err);
//     return [];
//   }
// }

// export { retrieveUsers };

import { UserLogin } from "../interfaces/UserLogin";  // Import the UserLogin interface for typing userInfo

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://backend-5e3f.onrender.com";

// Function to send a POST request to the '/auth/login' endpoint with user login information
const login = async (userInfo: UserLogin) => {
  try {
    // Send a POST request to '/auth/login' with user login information in JSON format
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
    }

    // Parse the response body as JSON
    const data = await response.json();

    return data;  // Return the data received from the server
  } catch (err) {
    console.log('Error from user login: ', err);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  }
}

const retrieveTickets = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/tickets/`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval: ', err);
    return [];
  }
};

const retrieveUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
}

export { login, retrieveTickets, retrieveUsers };
