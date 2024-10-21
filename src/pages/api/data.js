// pages/api/submitContact.js

import axios from "axios";

export default async function handler(req, res) {
  console.log("babu");

  
  if (req.method === "POST") {
    const {
      full_name,
      phone,
      others,
      service,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    } = req.body;

    // Construct the data object as per Directus API requirements
    const data = {
      full_name,
      phone,
      others,
      service,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    };
    console.log(data);
    // Optionally handle special origins based on centerName or other logic
    // This can be passed from the frontend if needed

    try {
      const directusResponse = await axios.post(
        `https://app.shootorder.com/items/contacts/?access_token=0wZWayS435edEnwJ_uTf5yJrZkk0t3fI`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        data
      );

      if (directusResponse.status === 201 || directusResponse.status === 200) {
        res.status(200).json({ success: true, data: directusResponse.data });
      } else {
        res
          .status(directusResponse.status)
          .json({ success: false, message: "Failed to submit data." });
      }
    } catch (error) {
      console.error(
        "Directus API Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
