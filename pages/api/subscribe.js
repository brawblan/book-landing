export default async (req, res) => {
  const { first_name, email } = req.query
  console.log(first_name, email);

  if (!email || !first_name) {
    return res.status(400).json({ error: "Email and/or Name is required." })
  }

  try {
    const API_URL = process.env.CONVERTKIT_API_URL
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    
    const data = { api_key: API_KEY, first_name, email  }
    
    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    console.log(response);
    
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