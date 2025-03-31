# Kanban Board with Authentication

## Overview

This project is a Kanban board application that integrates user authentication using JSON Web Tokens (JWT). The goal is to securely manage tasks in an agile environment. The application allows users to log in, access the Kanban board, and manage tasks with a secure and authenticated session. The system features automatic redirection, session expiry, and secure login for all users.

## Features

-   **Login Page**: Users must enter their username and password to access the Kanban board.
-   **JWT Authentication**: Authentication is handled via JWT. The token is stored in local storage for subsequent requests.
-   **Session Expiry**: After a period of inactivity, the session expires, and the user is redirected to the login page.
-   **Secure Access**: Unauthorized users are redirected to the login page if they attempt to access the Kanban board directly.

## User Story

As a member of an agile team, I want a Kanban board with a secure login page so that I can securely access and manage my work tasks.

## Acceptance Criteria

-   **Login Page**: The login page presents form inputs for username and password.
-   **Authentication**: Upon successful login, the user is authenticated using JWT and redirected to the Kanban board page.
-   **Error Handling**: If invalid credentials are entered, an error message is displayed.
-   **Token Management**: On successful login, the JWT is stored securely in the client's local storage. On logout, the JWT is removed.
-   **Unauthorized Access**: The user is redirected to the login page if they attempt to access the Kanban board without being authenticated.
-   **Session Expiry**: After a defined period of inactivity, the user's session expires, and the JWT is invalidated.

## Getting Started

### Prerequisites

Before starting, ensure that you have the following installed:

-   Node.js (v14.x or later)
-   NPM (Node Package Manager)
-   PostgreSQL (or any other database of choice)

### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/girma1978/authentication.git](https://github.com/girma1978/authentication.git)
    cd authentication
    ```

## Links

-   **GitHub repository:** [https://github.com/girma1978/authentication](https://github.com/girma1978/authentication)
-   **Front-end link:** [https://authentication-1-oqwb.onrender.com](https://authentication-1-oqwb.onrender.com)
-   **Back-end link:** [https://backend-5e3f.onrender.com](https://backend-5e3f.onrender.com)