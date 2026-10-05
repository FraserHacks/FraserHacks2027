const BASEROW_URL = "https://api.baserow.io/api/database/rows/table";

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const clean = (value, max) =>
  typeof value === "string" && value.trim().length <= max ? value.trim() : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};
  const row = {
    Name: clean(body.fullName, 120),
    Email: clean(body.email, 200),
    Grade: clean(body.grade, 10),
    School: clean(body.school, 120),
  };

  if (!row.Name || !isEmail(row.Email) || !row.Grade || !row.School) {
    return res.status(400).json({ error: "Invalid submission" });
  }

  const response = await fetch(
    `${BASEROW_URL}/${process.env.BASEROW_TABLE_ID}/?user_field_names=true`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BASEROW_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
    },
  );

  if (!response.ok) {
    console.error("baserow insert failed", response.status, await response.text());
    return res.status(502).json({ error: "Could not save submission" });
  }

  return res.status(200).json({ ok: true });
}
