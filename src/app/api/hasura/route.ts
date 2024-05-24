import { NextResponse } from "next/server";

export async function GET() {
  const uri = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";
  const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

  return NextResponse.json({ uri, hasuraAdminSecret });
}
