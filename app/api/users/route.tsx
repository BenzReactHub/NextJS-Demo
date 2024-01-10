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
