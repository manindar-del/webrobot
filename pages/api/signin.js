import { PrismaClient } from "@prisma/client";
// import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
import corsMiddleware from "../../cors";

let prisma = new PrismaClient();

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
  }
  prisma = global.prisma;
}

prisma.$on("query", (e) => {
  console.log(`${e.timestamp} Query: ${e.query}`);
  console.log(`${e.timestamp} Params: ${e.params}`);
  console.log(`${e.timestamp} Duration: ${e.duration}ms`);
});


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      // Execute a raw SQL query
      const result = await prisma.$queryRaw`SELECT * FROM user WHERE email=${email}&& password=${password} `;
  
      console.log(result); // Output the result of the query
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect(); // Don't forget to disconnect from the database
    }

  }
}