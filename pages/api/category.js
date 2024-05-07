// pages/api/categorys.js

import { PrismaClient } from "@prisma/client";
// import { corsMiddleware, jsonParser } from "../../middleware"; // If you have custom middleware
import corsMiddleware from "../../cors";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST" && req?.body?.id === undefined) {
    console.log(req.body, "testing");
    const { name, email } = req.body;
    try {
      const category = await prisma.category.create({
        data: {
          name,
        },
      });

      res.status(201).json(category);
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
    const { name } = req.body;
    let whereData = {};
    if (name !== undefined) {
      whereData = {
        job: {
          some: {
            name: { contains: name }, // Filter job with 'Lead' in the name
          },
        },
      };
    }
    try {
      const categorys = await prisma.category.findMany({
        where: whereData,
        include: {
          job: true,
        },
      });
      res.status(200).json(categorys);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (req.method === "PUT") {
    const { id, name, email } = req.body;
    try {
      const updatedCategory = await prisma.category.update({
        where: { id },
        data: { name },
      });

      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.category.delete({ where: { id } });
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
