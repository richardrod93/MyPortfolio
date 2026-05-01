import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(req: Request) {
  const body = await req.json();

  await sql`
    INSERT INTO inquiries (name, email, message)
    VALUES (${body.name}, ${body.email}, ${body.message})
  `;

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
