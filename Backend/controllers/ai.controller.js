import generateContent from "../Service/ai.service.js";

const getReview = async (req, res) => {
  try {

    const {data} = req.body;

    if (!data) {
      return res.status(400).json({ error: "Error while generating containt" });
    }

    const result = await generateContent(data);

    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

export default getReview;
