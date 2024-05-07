// middleware/cors.js

import Cors from "cors";

// Initialize the CORS middleware
const corsMiddleware = Cors({
  origin: "http://localhost:3000/", // Replace with the specific origins you want to allow or '*' for any origin.
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify the HTTP methods you want to allow.
});

export default corsMiddleware;
