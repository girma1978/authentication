// class AuthService {
  
//   // Check if the user is logged in by retrieving the token from localStorage
//   loggedIn() {
//     const token = this.getToken();
//     return token;
//   }

//   // Retrieve the JWT token from localStorage
//   getToken(): string {
//     const loggedUser = localStorage.getItem('id_token') || '';
//     return loggedUser;
//   }

//   // Store the JWT token in localStorage and redirect to the home page
//   login(idToken: string) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/');
//   }

//   // Remove the JWT token from localStorage and redirect to the home page
//   logout() {
//     localStorage.removeItem('id_token');
//     window.location.assign('/');
//   }
// }

// // Export an instance of the AuthService class
// export default new AuthService();


class AuthService {
  // Check if the user is logged in by retrieving the token from localStorage
  loggedIn(): boolean {
    const token = this.getToken();
    // Return true if token exists and is not empty, false otherwise
    return !!token;
  }

  // Retrieve the JWT token from localStorage
  getToken(): string {
    const token = localStorage.getItem('id_token') || '';
    return token;
  }

  // Store the JWT token in localStorage and redirect to the home page
  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the JWT token from localStorage and redirect to the home page
  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// Export an instance of the AuthService class
export default new AuthService();