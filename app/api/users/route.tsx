// GET - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../prisma/db"

// 如果沒有放request，會出現緩存
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  // if invalid, return 400
  // else, return

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
