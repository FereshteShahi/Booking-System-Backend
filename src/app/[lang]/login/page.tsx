'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/src/components/Button'
import { getContent } from '@/src/lib/getContent'
import { login } from "../../../actions/patient"

export default function Login({ params }: { params: { lang: 'de' | 'tr' } }) {
  const { lang } = params
  const router = useRouter()
  const content = getContent(lang, 'login')

  const [error, setError] = useState('')

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result = await login(email, password, lang)

    if (result.success) {
      router.push(`/${lang}/dashboard`) 
    } else {
      setError(result.message || 'Fehler beim Einloggen')
    }
  }

  return (
    <div className=" h-[85vh] text-center py-10 px-4  mt-[-17px] md:h-[78vh] md:mt-[-20px] lg:h-[78vh]">
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <div className="max-w-md mx-auto bg-[var(--color-foreground)] p-10 rounded-3xl shadow-lg">
        <form action={handleSubmit} method="POST" className="space-y-6 text-left">
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-medium">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-4 border rounded-lg text-lg"
              placeholder="E-Mail"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-lg font-medium">
              Passwort
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full p-4 border rounded-lg text-lg"
              placeholder="Passwort"
            />
          </div>

          {error && <p className="text-red-600">{error}</p>}

          {/* noch kein konto */}
          
          <div className="flex justify-center text-center">
            <Button className='' text="Einloggen" type='submit'/>
          </div>
        </form>
      </div>  
    </div>
  )
}
