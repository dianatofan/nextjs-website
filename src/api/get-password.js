// app/api/get-password/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const password = process.env.PASSWORD;
  return NextResponse.json({ password }, { status: 200 });
}
