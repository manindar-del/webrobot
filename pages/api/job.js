// pages/api/jobs.js

import { PrismaClient } from "@prisma/client";
// import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
import corsMiddleware from "../../cors";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, description, code, creationDate, latestEdit } = req.body;
    try {
      const job = await prisma.job.create({
        data: {
          name,
          description,
          code,
          creationDate,
          latestEdit,
          categoryId: 1,
        },
      });

      res.status(201).json(job);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const jobs = await prisma.job.findMany();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { name, description, code, creationDate, latestEdit } = req.body;
    try {
      const updatedJob = await prisma.job.update({
        where: { id },
        data: {
          name,
          description,
          code,
          creationDate,
          latestEdit,
          categoryId: 1,
        },
      });

      res.status(200).json(updatedJob);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.job.delete({ where: { id } });
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
