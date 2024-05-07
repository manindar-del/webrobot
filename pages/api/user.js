// pages/api/users.js

import { PrismaClient } from "@prisma/client";
import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
// import corsMiddleware from "../../cors";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // await corsMiddleware(req, res);
  if (req.method === "POST") {
    const { name, email } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        // Log the validation errors to the console
        console.error("Prisma Validation Errors:", error.message);
        res
          .status(400)
          .json({ error: "Validation Error", details: error.message });
      } else {
        // Handle other types of errors (e.g., database errors)
        console.error("Prisma Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { id, name, email } = req.body;
    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: { name, email },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.user.delete({ where: { id } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
