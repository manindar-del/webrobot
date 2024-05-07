// pages/api/jobtoprojects.js

import { PrismaClient } from "@prisma/client";
// import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
import corsMiddleware from "../../cors";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST" && req?.body?.id === undefined) {
    console.log(req.body, "testing");
    const { jobId, projectId, inputDatasetId, inputdataset, job, project } =
      req.body;
    try {
      const jobtoproject = await prisma.jobtoproject.create({
        data: {
          jobId,
          projectId,
          inputDatasetId,
          inputdataset,
          job,
          project,
        },
      });

      res.status(201).json(jobtoproject);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "POST" && req?.body?.id !== undefined) {
    try {
      const categorys = await prisma.category.findUnique({
        where: { id: parseInt(req.body.id) },
        include: {
          job: true,
        },
      });
      res.status(200).json(categorys);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const jobtoprojects = await prisma.jobtoproject.findMany();
      res.status(200).json(jobtoprojects);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { id, jobId, projectId, inputDatasetId, inputdataset, job, project } =
      req.body;
    try {
      const updatedJobtoproject = await prisma.jobtoproject.update({
        where: { id },
        data: { jobId, projectId, inputDatasetId, inputdataset, job, project },
      });

      res.status(200).json(updatedJobtoproject);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.jobtoproject.delete({ where: { id } });
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
