# Simple Feedback Management System
Project Setup
Backend (Node.js, Express, TypeScript)

1.Navigate to the simple-feedback-backend directory.

2.Install dependencies using npm install.

3.Compile TypeScript code to JavaScript using tsc.

4.Start the backend server using node dist/app.js.

Frontend (React, TypeScript)

1.Navigate to the simple-feedback-frontend directory.

2.Install dependencies using npm install.

3.Start the frontend development server using npm start.

Project Structure
Backend

1.src/controllers: Contains controller functions for handling HTTP requests and responses.

2.src/routes: Defines API routes using Express Router.

3.src/app.ts: Main file to configure Express server, middleware, and mount routes.

Frontend

1.src/App.tsx: Main React component to display the feedback form and list.

2.src/services/api.ts: Axios configuration for making API requests to the backend.

Additional Notes

a)Backend uses in-memory storage (an array) to store feedback entries. No external databases like Redis are used.

b)Rate limiting is implemented on the backend to allow one feedback submission per user every 10 seconds based on IP address.

c)Frontend communicates with the backend using Axios for API requests.

d)A web worker can be implemented for data fetching on the frontend, providing asynchronous handling.

e)Virtual or infinite scrolling can be implemented in the frontend for better user experience, understanding its working is recommended for potential questioning.
