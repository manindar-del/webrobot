// pages/api/projects.js

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
    const { name, description, frequency, startDate, endDate } = req.body;
    let sdate = "2023-10-19 19:11:01.000";
    let edate = "2023-11-30 19:11:01.000";
    try {
      const project = await prisma.project.create({
        data: {
          name,
          description,
          frequency,
          startDate,
          endDate,
          status: 1,
        },
      });

      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const projects = await prisma.project.findMany({
        include: {
          jobtoproject: {
            select: {
              projectId: true,
              project: true,
              job: true,
              inputdataset: true,
              outputdataset: true,
            },
          },
        },
      });
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { id, name, description, frequency, jobtoproject } = req.body;
    try {
      const updatedProject = await prisma.project.update({
        where: { id },
        data: { name, description, frequency, startDate, endDate },
      });

      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.project.delete({ where: { id } });
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
