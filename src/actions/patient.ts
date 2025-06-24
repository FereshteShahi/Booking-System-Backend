'use server';

import sql from '@/src/lib/postgre';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { randomBytes } from 'crypto';
import type { User } from '@/src/types/User';

export async function login(email: string, password: string, lang:"de"|"tr"): Promise<{ success: boolean; message?: string }> {
  const result = (await sql`
    SELECT * FROM users WHERE email = ${email}
  `) as User[];

  const user = result[0];

  if (!user) {
    return { success: false, message: 'Benutzer nicht gefunden' };
  }

  if (user.password !== password) {
    return { success: false, message: 'Falsches Passwort' };
  }

  

  const cookieStore = await cookies();
 cookieStore.set('userid', user.id.toString(),{
  httpOnly: true,
  path: '/',
  maxAge: 60 * 60 * 24 * 30, // 30 Tage
  sameSite: 'lax',
 })

 const de = lang === 'de' ? 'de' : 'tr';
  redirect(`/${de}/dashboard`);}

export async function register({
  username,
  password,
  email,
  telefonnummer,
  geburtstag,
  lang,
}: {
  username: string;
  password: string;
  email: string;
  telefonnummer: string;
  geburtstag: string;
  lang: 'de' | 'tr';
}): Promise<void> {
  const existingUser = (await sql`
    SELECT * FROM users WHERE username = ${username}
  `) as User[];

  if (existingUser.length > 0) {
    throw new Error('Benutzername bereits vergeben');
  }

  await sql`
    INSERT INTO users (username, password, email, telefone, geburtstag)
    VALUES (${username}, ${password}, ${email}, ${telefonnummer}, ${geburtstag})
  `;
  const de = lang === 'de' ? 'de' : 'tr';
  redirect(`/${de}/login`);
}

export async function getMyUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userid')?.value
  if (!userId) return null

  const result = await sql`
    SELECT id, username, email, telefone FROM users WHERE id = ${userId}
  ` as User[]

  return result[0] || null
}


