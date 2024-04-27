import { Router } from 'express';
const router = Router();

router.get("/api/holidays", async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).send({ data: "Missing dates!"});
    }
    
    const response = await fetch(`https://api.sallinggroup.com/v1/holidays?startDate=${startDate}&endDate=${endDate}`, {
        headers: {
            'Authorization': 'Bearer ' + process.env.SALLING_API_TOKEN
        }
    });
    const result = await response.json();

    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(500).send({ data: "Failed to get data!" });
    }
  });

export default router;