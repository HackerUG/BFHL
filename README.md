# 🚀 Bajaj Finserv Hackathon API  

A simple **REST API** built with **Node.js & Express**, which takes an array of values and returns processed results such as even numbers, odd numbers, alphabets (uppercase), special characters, sum of numbers, and a concatenated string of alphabets in alternating caps.  

---

## 📌 Features
- ✅ Accepts JSON input (POST request).  
- ✅ Separates numbers (odd / even).  
- ✅ Extracts alphabets & converts to **UPPERCASE**.  
- ✅ Identifies special characters.  
- ✅ Returns **sum of numbers** as a string.  
- ✅ Concatenates alphabets in **reverse order with alternating caps**.  
- ✅ Returns custom **user_id**, email, and roll number.  
- ✅ Hosted API endpoint on **Vercel**.  

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [Vercel](https://vercel.com/) for hosting  

---

## ⚙️ Installation & Setup  

npm install
npm start
deploy on vercel 
https://your-app-name.vercel.app/bfhl

🔹 Request Body (JSON)
{
  "data": ["a","1","334","4","R","$"]
}

🔹 Example Response
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}


