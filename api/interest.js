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
    name: clean(body.fullName, 120),
    email: clean(body.email, 200),
    grade: clean(body.grade, 10),
    school: clean(body.school, 120),
  };

  if (!row.name || !isEmail(row.email) || !row.grade || !row.school) {
    return res.status(400).json({ error: "Invalid submission" });
  }

  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/interest_signups`,
    {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    },
  );

  if (!response.ok) {
    console.error("supabase insert failed", response.status, await response.text());
    return res.status(502).json({ error: "Could not save submission" });
  }

  return res.status(200).json({ ok: true });
}
