// src/actions/termin.ts
'use server'

import { getMyUser } from '@/src/actions/patient';
import sql from '@/src/lib/postgre';

export async function createTermin(datum: string, uhrzeit: string, bemerkung: string) {
  const user = await getMyUser();
  if (!user) return { success: false, message: 'Nicht eingeloggt' };

  await sql`
    INSERT INTO termine (user_id, datum, uhrzeit, bemerkung)
    VALUES (${user.id}, ${datum}, ${uhrzeit}, ${bemerkung})
  `;

  return { success: true };
}
