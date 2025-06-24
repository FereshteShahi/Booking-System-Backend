'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'
import Button from '@/src/components/Button'
import { createTermin } from '@/src/actions/termin'

export default function NeuerTerminModal({ lang }: { lang: 'de' | 'tr' }) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState<{ username: string; email: string } | null>(null)
  const router = useRouter()

  // گرفتن اطلاعات کاربر
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/user')
      const data = await res.json()
      if (data.success) {
        setUser(data.user)
      }
    }
    fetchUser()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await createTermin(date, time, '')

    if (result.success) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            datum: date,
            uhrzeit: time,
            name: user?.username ?? 'Unbekannt',
            email: user?.email ?? 'Kein Email',
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(() => console.log('Email gesendet!'))
        .catch((error) => console.error('EmailJS Error:', error))

      setOpen(false)
      setDate('')
      setTime('')
      router.refresh()
    } else {
      setError(result.message || 'Fehler beim Speichern')
    }

    setLoading(false)
  }

  return (
    <div className="text-center flex flex-col items-center h-[49vh]">
      <Button text="neuer Termin" onClick={() => setOpen(true)} />

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-xl shadow-lg w-100 md:w-[400px] lg:w-[800px]">
            <h2 className="text-xl font-bold mb-4">Neuer Termin</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-center">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded p-2"
              />
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded p-2"
              />

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div className="flex justify-between">
                <Button text="Abbrechen" type="button" onClick={() => setOpen(false)} />
                <Button text={loading ? 'Speichern...' : 'Speichern'} type="submit"  />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
