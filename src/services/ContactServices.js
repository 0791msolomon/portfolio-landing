import axios from "axios";
require("dotenv").config();

let baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
baseUrl += "/api";

export const contactData = async (name, company, email) => {
  try {
    let response = await axios.post(`${baseUrl}/contactForm`, {
      name,
      company,
      email
    });
    return response;
  } catch (err) {
    return err;
  }
};
