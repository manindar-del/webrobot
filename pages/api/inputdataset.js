// pages/api/inputdatasets.js

import { PrismaClient } from "@prisma/client";
// import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
import corsMiddleware from "../../cors";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    try {
      const inputdataset = await prisma.inputdataset.create({
        data: {
          name,
          email,
        },
      });

      res.status(201).json(inputdataset);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const inputdatasets = await prisma.inputdataset.findMany();
      res.status(200).json(inputdatasets);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { id, name, email } = req.body;
    try {
      const updatedInputdataset = await prisma.inputdataset.update({
        where: { id },
        data: { name, email },
      });

      res.status(200).json(updatedInputdataset);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.inputdataset.delete({ where: { id } });
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
