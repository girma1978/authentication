// import { TicketData } from '../interfaces/TicketData';
// import { ApiMessage } from '../interfaces/ApiMessage';
// import Auth from '../utils/auth';

// const retrieveTickets = async () => {
//   try {
//     const response = await fetch(
//       '/api/tickets/',
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${Auth.getToken()}`
//         }
//       }
//     );
//     const data = await response.json();

//     if(!response.ok) {
//       throw new Error('invalid API response, check network tab!');
//     }

//     return data;
//   } catch (err) {
//     console.log('Error from data retrieval: ', err);
//     return [];
//   }
// };

// const retrieveTicket = async (id: number | null): Promise<TicketData> => {
//   try {
//     const response = await fetch(
//       `/api/tickets/${id}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${Auth.getToken()}`
//         }
//       }
//     );

//     const data = await response.json();

//     if(!response.ok) {
//       throw new Error('Could not invalid API response, check network tab!');
//     }
//     return data;
//   } catch (err) {
//     console.log('Error from data retrieval: ', err);
//     return Promise.reject('Could not fetch singular ticket');
//   }
// }

// const createTicket = async (body: TicketData) => {
//   try {
//     const response = await fetch(
//       '/api/tickets/', {
//         method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${Auth.getToken()}`
//           },
//         body: JSON.stringify(body)
//       }

//     )
//     const data = response.json();

//     if(!response.ok) {
//       throw new Error('invalid API response, check network tab!');
//     }

//     return data;

//   } catch (err) {
//     console.log('Error from Ticket Creation: ', err);
//     return Promise.reject('Could not create ticket');
//   }
// }

// const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
//   try {
//     const response = await fetch(
//       `/api/tickets/${ticketId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${Auth.getToken()}`
//         },
//         body: JSON.stringify(body)
//       }
//     )
//     const data = await response.json();

//     if(!response.ok) {
//       throw new Error('invalid API response, check network tab!');
//     }

//     return data;
//   } catch (err) {
//     console.error('Update did not work', err);
//     return Promise.reject('Update did not work');
//   }
// };

// const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
//   try {
//     const response = await fetch(
//       `/api/tickets/${ticketId}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${Auth.getToken()}`
//         }
//       }
//     )
//     const data = await response.json();

//     if(!response.ok) {
//       throw new Error('invalid API response, check network tab!');
//     }

//     return data;
//   } catch (err) {
//     console.error('Error in deleting ticket', err);
//     return Promise.reject('Could not delete ticket');
//   }
// };


// export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket};

// import { TicketData } from '../interfaces/TicketData';
// import { ApiMessage } from '../interfaces/ApiMessage';
// import Auth from '../utils/auth';

// // Retrieve all tickets
// const retrieveTickets = async () => {
//   try {
//     const response = await fetch('/api/tickets/', {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       }
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Invalid API response, check network tab!');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log('Error from data retrieval:', err);
//     return [];  // Return an empty array in case of an error
//   }
// };

// // Retrieve a specific ticket by ID
// const retrieveTicket = async (id: number | null): Promise<TicketData> => {
//   try {
//     const response = await fetch(`/api/tickets/${id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       }
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Could not fetch singular ticket');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log('Error from data retrieval:', err);
//     throw new Error('Could not fetch singular ticket'); // Propagate the error with a meaningful message
//   }
// };

// // Create a new ticket
// const createTicket = async (body: TicketData) => {
//   try {
//     const response = await fetch('/api/tickets/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       },
//       body: JSON.stringify(body)
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Invalid API response, check network tab!');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log('Error from Ticket Creation:', err);
//     throw new Error('Could not create ticket'); // Propagate the error
//   }
// };

// // Update a ticket by its ID
// const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
//   try {
//     const response = await fetch(`/api/tickets/${ticketId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       },
//       body: JSON.stringify(body)
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Invalid API response, check network tab!');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error('Update did not work', err);
//     throw new Error('Update did not work');
//   }
// };

// // Delete a ticket by its ID
// const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
//   try {
//     const response = await fetch(`/api/tickets/${ticketId}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${Auth.getToken()}`
//       }
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Invalid API response, check network tab!');
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error('Error in deleting ticket', err);
//     throw new Error('Could not delete ticket'); // Propagate the error
//   }
// };

// export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket };

import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import Auth from '../utils/auth';

// Dynamically set the base URL (local or remote)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';  // Default to local backend

// Retrieve all tickets
const retrieveTickets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tickets/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Invalid API response, check network tab!');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];  // Return an empty array in case of an error
  }
};

// Retrieve a specific ticket by ID
const retrieveTicket = async (id: number | null): Promise<TicketData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tickets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Could not fetch singular ticket');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    throw new Error('Could not fetch singular ticket');
  }
};

// Create a new ticket
const createTicket = async (body: TicketData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tickets/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Invalid API response, check network tab!');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from Ticket Creation:', err);
    throw new Error('Could not create ticket');
  }
};

// Update a ticket by its ID
const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tickets/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Invalid API response, check network tab!');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Update did not work', err);
    throw new Error('Update did not work');
  }
};

// Delete a ticket by its ID
const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tickets/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Invalid API response, check network tab!');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error in deleting ticket', err);
    throw new Error('Could not delete ticket');
  }
};

export { createTicket, deleteTicket, retrieveTickets, retrieveTicket, updateTicket };
