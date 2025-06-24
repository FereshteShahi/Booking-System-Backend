'use server'

import { getMyUser } from '@/src/actions/patient'
import sql from '@/src/lib/postgre'
import type { Termin } from '@/src/types/Termin'
import type { User } from '@/src/types/User'
import NeuerTerminModal from '@/src/components/NeuerTerminModal'

export default async function DashboardPage({ params }: { params: { lang: 'de' | 'tr' } }) {
  const lang = params.lang
  const userId = await getMyUser()
  console.log('User ID:', userId)

  const [user] = await sql`SELECT * FROM users WHERE id = ${userId?.id}` as User[];
    if (!user) {
        return <div className="text-red-500">Benutzer nicht gefunden</div>
    }
  const termine = await sql`SELECT * FROM termine WHERE user_id = ${userId?.id} ORDER BY datum ASC` as Termin[]

  const nextTermin = termine.length > 0 ? termine[0] : null


// *************************

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hallo {user.username}</h1>
      <p className="text-lg mb-6">
        Dein nächster Termin ist: {nextTermin ? `${typeof nextTermin.datum === 'string' ? nextTermin.datum : nextTermin.datum.toLocaleDateString()} um ${nextTermin.uhrzeit}` : 'Kein Termin gefunden'}
      </p>

      <h2 className="text-xl font-semibold mb-2">Alle Termine:</h2>
      <ul className="mb-6 space-y-2">
        {termine.map((t) => (
          <li key={t.id} className="border p-3 rounded-xl">
            {typeof t.datum === 'string' ? t.datum : t.datum.toLocaleDateString()} um {t.uhrzeit}
          </li>
        ))}
      </ul>

        
      <NeuerTerminModal lang={lang} />
    </div>
  )
}
