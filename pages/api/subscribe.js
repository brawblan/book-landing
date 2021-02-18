export default async (req, res) => {
  const { first_name, email } = req.query

  if (!email) {
    return res.status(400).json({ error: "Email is required." })
  }

  try {
    const API_URL = process.env.CONVERTKIT_API_URL
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    
    const data = { first_name, email, api_key: API_KEY }
    
    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    
    if (response.status >= 400) {
      return res
      .status(400)
      .json({ error: "There was an error subscribing to the list." })
    }
    
    return res.status(201).json({ error: "" })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
};