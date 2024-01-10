// GET - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";

// 如果沒有放request，會出現緩存
export function GET(request: NextRequest) {
  // fetch users from a db

  return NextResponse.json([
    { id: 1, name: "ben" },
    { id: 2, name: "lisa" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // if invalid, return 400
  // else, return

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
