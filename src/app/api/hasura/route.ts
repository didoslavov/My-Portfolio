import { NextRequest, NextResponse } from "next/server";

const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET || "";
const HASURA_PROJECT_ENDPOINT =
  process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";

if (!HASURA_ADMIN_SECRET || !HASURA_PROJECT_ENDPOINT) {
  throw new Error("Hasura environment variables are not set.");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(HASURA_PROJECT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from Hasura" },
      { status: 500 },
    );
  }
}
