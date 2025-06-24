// app/api/me/route.ts
import { NextResponse } from 'next/server'
import { getMyUser } from '@/src/actions/patient'

export async function GET() {
  const user = await getMyUser()

  if (!user) {
    return NextResponse.json({ success: false, user: null })
  }

  return NextResponse.json({ success: true, user })
}
