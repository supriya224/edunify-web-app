import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, address, number, file } = req.body;
    try {
      const newSchool = await prisma.school.create({
        data: {
          firstname,
          lastname,
          email,
          address,
          number,
          file,
        },
      });
      res.status(200).json(newSchool);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error adding school' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
