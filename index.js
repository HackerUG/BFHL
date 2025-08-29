const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


const FULL_NAME = process.env.FULL_NAME || "utkarsh_goel_01072004";
const DOB = process.env.DOB || "01072004"; 
const EMAIL = process.env.EMAIL || "utkarsh.22bce8328@vitapstudent.ac.in";
const ROLL_NUMBER = process.env.ROLL_NUMBER || "22BCE8328";


function parseDobToDDMMYYYY(dob) {
  const digits = dob.replace(/\D/g, "");
  if (digits.length === 8) {
    return digits; 
  }
  return "01072004";
}


function formatUserId(fullName, dob) {
  const normalized = fullName.trim().toLowerCase().replace(/\s+/g, "_");
  const dobStr = parseDobToDDMMYYYY(dob);
  return `${normalized}_${dobStr}`;
}

function processInputData(arr) {
  const alphabets = [];
  const oddNumbers = [];
  const evenNumbers = [];
  const specialCharacters = [];
  let sum = 0;
  const alphaChars = [];

  arr.forEach((item) => {
    const s = String(item);

    if (/^-?\d+$/.test(s)) {

      const num = parseInt(s, 10);
      sum += num;
      if (Math.abs(num) % 2 === 0) {
        evenNumbers.push(s);
      } else {
        oddNumbers.push(s);
      }
    } else if (/^[A-Za-z]+$/.test(s)) {

      alphabets.push(s.toUpperCase());
      for (let ch of s) {
        alphaChars.push(ch);
      }
    } else {

      specialCharacters.push(s);
    }
  });


  const reversed = alphaChars.reverse().map((ch, i) =>
    i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  );
  const concatString = reversed.join("");

  return {
    alphabets,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    special_characters: specialCharacters,
    sum: String(sum),
    concat_string: concatString,
  };
}


app.post("/bfhl", (req, res) => {
  try {
    const body = req.body;
    if (!Array.isArray(body.data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. Expected { "data": [ ... ] }',
      });
    }

    const user_id = formatUserId(FULL_NAME, DOB);
    const processed = processInputData(body.data);

    return res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: processed.odd_numbers,
      even_numbers: processed.even_numbers,
      alphabets: processed.alphabets,
      special_characters: processed.special_characters,
      sum: processed.sum,
      concat_string: processed.concat_string,
    });
  } catch (err) {
    return res.status(500).json({ is_success: false, message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("API running. Use POST /bfhl");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
