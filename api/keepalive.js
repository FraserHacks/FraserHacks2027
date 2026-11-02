export default async function handler(req, res) {
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/interest_signups?select=id&limit=1`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    },
  );

  if (!response.ok) {
    console.error("supabase keepalive failed", response.status, await response.text());
    return res.status(502).json({ error: "Keepalive failed" });
  }

  return res.status(200).json({ ok: true });
}
